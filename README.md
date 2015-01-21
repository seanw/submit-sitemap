submit-sitemap module for Node.js
==

<img src="https://travis-ci.org/seanw/submit-sitemap.svg?branch=master" alt="Travis CI build status"> <img src="https://badge.fury.io/js/submit-sitemap.svg" alt="Version badge">

Module to submit/ping a sitemap XML file to [Google](http://www.google.com) and [Bing](http://www.bing.com). This automates the manual process of submitting your sitemap via [Google's webmaster tools](https://support.google.com/sites/answer/100283?hl=en) and [Bing's webmaster tools](http://www.bing.com/webmaster/help/how-to-submit-sitemaps-82a15bd4).

Use this after your site content has changed to encourage search engines to recrawl your site for Search Engine Optimisation (SEO) purposes. For example, this is useful to do after deploying a site update in [Grunt](http://gruntjs.com/) and  [Gulp](http://gulpjs.com/) scripts.

If you're looking for modules to generate sitemaps, you may want to consider [grunt-sitemap for Grunt](https://www.npmjs.com/package/grunt-sitemap) and [gulp-sitemap for Gulp](https://www.npmjs.com/package/gulp-sitemap).

# Usage

To install:

    npm install submit-sitemap --save-dev

To submit your sitemap:

    var submitSitemap  = require('submit-sitemap').submitSitemap;
    var yourSitemapUrl = "http://www.google.com/sitemap.xml";

    submitSitemap(yourSitemapUrl);

Use the callback parameter to respond to success and failure:

    submitSitemap(yourSitemapUrl,  function(err) { console.error(err); });

- On success, `err` will be undefined.

- On error, `err` will be set to an error message. This happens if the sitemap URL could not be reached or any of the sitemap submission attempts failed.

# Tests

To run the test suite:

    npm test

# License

MIT

# Author

Written by [Sean Wilson](https://www.seanw.org) ([sw@seanw.org](mailto:sw@seanw.org)).
