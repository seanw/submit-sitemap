submit-sitemap module for Node.js
==

Module to submit a sitemap XML file to [Google](http://www.google.com) and [Bing](http://www.bing.com). This automates the manual process of submitting your sitemap via [Google's webmaster tools](https://support.google.com/sites/answer/100283?hl=en) and [Bing's webmaster tools](http://www.bing.com/webmaster/help/how-to-submit-sitemaps-82a15bd4).

Use this after your site content has changed to encourage search engines to recrawl your site for Search Engine Optimisation (SEO) purposes. For example, this is useful to do after deploying a site update in [Grunt](http://gruntjs.com/) and  [Gulp](http://gulpjs.com/) scripts.

If you're looking for modules to generate sitemaps, you may want to consider [grunt-sitemap for Grunt](https://www.npmjs.com/package/grunt-sitemap) and [gulp-sitemap for Gulp](https://www.npmjs.com/package/gulp-sitemap)

# Usage

To install:

`npm install submit-sitemap --save-dev`

To run:

`require('submit-sitemap').submitSitemap("http://www.example.com",  function(err) { });`

The `err` variable of the callback function will be defined if the sitemap URL could not be reached or any of the of the sitemap submission attempts failed.

# Tests

To run the test suite:

`npm test`

# License

MIT

# Author

Written by [Sean Wilson](https://www.seanw.org) ([sw@seanw.org](mailto:sw@seanw.org)).
