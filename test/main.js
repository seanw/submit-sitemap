var submitSitemap = require('../index.js').submitSitemap;

var should = require('should');
var nock = require("nock");

describe('Submit sitemap', function(done) {
  beforeEach(function() {
    nock.cleanAll();
    nock("http://www.example.com").persist().get("/sitemap.xml").reply(200);
  });

  it('succeeds for reachable sitemap URL', function(done) {
    submitSitemap("http://www.example.com/sitemap.xml", done);
  });

  it('fails if sitemap URL gives 404 error', function(done) {
    nock("http://www.example.com").get("/404.xml").reply(404);

    submitSitemap("http://www.example.com/404.xml", function(err) {
      done(err ? undefined : -1);
    });
  });

  it('fails if Google sitemap submission URL gives 404 error', function(done) {
    nock("http://www.google.com").get("*").reply(404);

    submitSitemap("http://www.example.com/sitemap.xml", function(err) {
      done(err ? undefined : -1);
    });
  });

  it('fails if Bing sitemap submission URL gives 404 error', function(done) {
    nock("http://www.bing.com").get("*").reply(404);

    submitSitemap("http://www.example.com/sitemap.xml", function(err) {
      done(err ? undefined : -1);
    });
  });
});
