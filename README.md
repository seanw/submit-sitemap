submit-sitemap module for Node.js
==

Module to submit a sitemap XML file to [Google](http://www.google.com) and [Bing](http://www.bing.com). Use after your site content has changed to encourage search engines to recrawl your site. For example, this is useful to do after deploying a site update in [Grunt](http://gruntjs.com/) and  [Gulp](http://gulpjs.com/) scripts.

# Usage

To install:

`npm install submit-sitemap --save`

To run:

`require('submit-sitemap').submitSitemap("http://www.example.com",  function(err) { });`

The callback will indicate an error if the sitemap URL could not be reached or any of the sitemap submission attempts fail.

# License

MIT

# Author

Written by [Sean Wilson](https://www.seanw.org) ([sw@seanw.org](mailto:sw@seanw.org)).
