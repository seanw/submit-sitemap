var async = require('async');
var request = require('request');

function httpRequestSuccessful(url, callback) {
  callback = callback || function() {};

  request(url, function(error, response, body) {
    if (error)
      callback(error);
    else if (response.statusCode != 200)
      callback(Error("URL " + url + " gave status code " + response.statusCode));
    else
      callback();
  });
}

module.exports = {
  submitSitemap: function(sitemapUrl, callback) {
    callback = callback || function() {};

    httpRequestSuccessful(sitemapUrl, function(err) {
      if (err) {
        callback(err);
        return;
      }

      var sitemapUrlParam = encodeURIComponent(sitemapUrl);

      var googleSubmitUrl = "http://www.google.com/ping?sitemap=" + sitemapUrlParam;
      var bingAndYahooSubmitUrl = "http://www.bing.com/ping?sitemap=" + sitemapUrlParam;

      async.each([googleSubmitUrl, bingAndYahooSubmitUrl], function(url, callback) {
        httpRequestSuccessful(url, callback);
      }, callback);
    });
  }
};
