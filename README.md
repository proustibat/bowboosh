HTML5 boilerplate with NPM, Gulp, Bower, Bootstrap Sass, Font-awesome, Bootswatch themes, deployment tasks, documentation and code analysis tasks.


## Demo: [http://demo.proustib.at/bowboosh/](http://demo.proustib.at/bowboosh/)


_____


# Main features
- HTML5 Boilerplate
- Modernizr library customization
- Scss files compilation:
    - from bootstrap,
    - bootswatch theme,
    - custom scss files.
- Font icon with `font-awesome`
- Javascript files compilation:
    - vendors,
    - core applications
- Images optimization with `gulp-imagemin`
- Analysis and documentations


_____


# Table of content

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Quick usage](#quick-usage)
- [Main other tasks available:](#main-other-tasks-available)
- [Help](#help)
- [Classical workflow](#classical-workflow)
- [Watching for development](#watching-for-development)
  - [Building for production](#building-for-production)
  - [Deployment](#deployment)
- [Code quality](#code-quality)
  - [Code Complexity](#code-complexity)
  - [Copy paste detector](#copy-paste-detector)
  - [JSHint](#jshint)
- [Reporting (Plato)](#reporting-plato)
- [Documentations](#documentations)
  - [Javascript (JSDoc)](#javascript-jsdoc)
      - [Demo](#demo)
  - [Sass Doc](#sass-doc)
- [Customization](#customization)
  - [./config.json: Application default configuration file](#configjson-application-default-configuration-file)
  - [./modernizr-config.json: Modernizr default configuration file](#modernizr-configjson-modernizr-default-configuration-file)
  - [.jshintrc: JSHint default configuration file](#jshintrc-jshint-default-configuration-file)
  - [./credentials.json: Private data file](#credentialsjson-private-data-file)
- [Npm Packages](#npm-packages)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
- [Bower packages](#bower-packages)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- Run doctoc README.md --github  -->
<!-- Informations: https://github.com/thlorenz/doctoc -->



_____



# Quick usage
```sh
npm install         // install required npm packages and required bower packages
npm start           // start watchers for development environment
npm run build       // build public files for production environment
```

Web app is generated in "./dist" directory.


_____



# Other key tasks available
```sh
npm run doc-build       // build js and sass documentation in "./dist/docs"
npm run doc-dev         // start watchers for documentations
npm run analysis        // run several gulp tasks to analize code quality
npm run report          // run plato and publish results in "./dist/docs/plato-report"
npm run deploy          // SFTP deployment on a remote server
```

## Help
All available gulp tasks are visible when running `gulp h` or ` npm run help`

Result:

```sh
  build                     Build web app or site for distribution
  build-bootswatch-theme    Copy sass files from theme choosen in config
  build-fonts               Copy all fonts source into public directory
  build-imagemin            Optimize images
  build-js-classical        Build javascript file from classical javascript sources
  build-js-classical-bis    Build javascript file from classical bis javascript sources
  build-js-smp              Build javascript file from simple javascript modules sources
  build-js-umd              Build javascript file from UMD javascript modules sources
  build-jsdoc               Generate javascript documentation
  build-modernizr           Create a custom modernizr file depending on ./modernizr.config.json
  build-sass                Compile all scss files of the project into the public directory
  build-sassdoc             Generate documentation for scss source files
  build-vendors             Compile libraries used in the project into libs.js in public directory
  clean-all-js              Delete fonts directory in public directory
  clean-app                 Delete public directory
  clean-base-src            Delete exported basic boilerplate files
  clean-css                 Delete compiled css files
  clean-fonts               Delete fonts directory in public directory
  clean-imagemin            Delete optimized image in public directory
  clean-jsdoc               Delete javascript documentation
  clean-modernizr           Delete compiled custom modernizr file
  clean-theme-css           Delete scss bootswatch theme file
  clean-vendor              Delete compiled vendor file
  complexity                Run software complexity analysis
  copy-base-src             Copy basic files in public directory
  default                   Default task: run watchers
  deploySFTP                Push changes to remote servers (eg: staging/production)
  help                      Display this help text. Aliases: h, ?
  install-bower             Get all setup and ready
  jscpd                     Run copy paste detector tool
  jshint                    Run JSHINT: tool that helps to detect errors and potential problems in code
  plato-report              Run Plato: javaScript source analysis and visualizer
  reload-config             Require new config after changes on config.json
  reload-modernizr-options  Require new modernizr options after changes on modernizr.config.json
  watch                     Run watchers on all web app or site sources
  watch-base-src            Watch basic files sources
  watch-fonts               Watch scss files sources
  watch-imagemin            Watch images sources to reload imagemin task
  watch-js-classical        Watch classical javascript files
  watch-js-classical-bis    Watch classical javascript files bis
  watch-js-smp              Watch simple javascript modules files
  watch-js-umd              Watch UMD modules javascript files
  watch-jsdoc               Watch javascript files to regenerate documentation
  watch-modernizr           Watch modernizr options to rebuild custom modernizr file
  watch-sass                Watch scss files sources
  watch-sassdoc             Watch sass files to regenerate sass documentation
  watch-vendors             Watch vendor libraries


```

_____


# Classical workflow


## Watching for development

Run `npm start` or `gulp` or `gulp watch`.
Several watchers are running for each tasks (see `gulp help` to list available tasks).


## Building for production

Run `npm run build` or `gulp build` or `gulp build --prod`
*If you wanna build with sourcemaps and console without watching you can run `gulp build --dev`*


## Deployment

Via SFTP (`using gulp-sftp`)

Run `npm run deploy` if you are using credentials.json file.

or
```
gulp deploySFTP --host="164.129.01.86" --user="username" --password="password-of-the-user" --remoteBase="var/www/html"
```

_____



# Code quality

- `npm run analysis` will run `gulp jscpd`, `gulp complexity` and `gulp jshint`.
- `npm run doc` will run `gulp jsdoc`

## Code Complexity

Result example of `gulp complexity`:

```
$ gulp complexity
[18:31:40] Starting 'complexity'...
[18:31:40] V src\js\simple-module-pattern\main.js             ██████ 122.02
[18:31:40] V src\js\simple-module-pattern\module.js           ███████ 145.19
[18:31:40] V src\js\universal-module-definition\App.js        ██████ 124.95
[18:31:40] V src\js\universal-module-definition\myModule.js   ██████ 133.49
[18:31:40] Finished 'complexity' after 375 ms
```

See [http://jscomplexity.org/complexity](http://jscomplexity.org/complexity) and [https://github.com/escomplex/complexity-report](https://github.com/escomplex/complexity-report) for more details.

## Copy paste detector

Result example of `gulp jscpd`:

When all is alright, there's nothing to say:

```
$ gulp jscpd
[18:32:24] Using gulpfile C:\wamp\www\bowboosh\gulpfile.js
[18:32:24] Starting 'jscpd'...
[18:32:25] Finished 'jscpd' after 743 ms
```

When there's a problem (for the example, add a copy of _cache function in main.js, changing its name by _duplicate):

```
$ gulp jscpd
[18:39:57] Using gulpfile C:\wamp\www\bowboosh\gulpfile.js
[18:39:57] Starting 'jscpd'...
[18:39:58] | ERROR-HANDLER |Found 1 exact clones with 8 duplicated lines in 1 files

Lines 146-154 are duplicates of lines 154-162 in src\js\simple-module-pattern\main.js

            _cache: function () {
                console.log( 'application._cache' );
                this.body = document.body;
                this.title = this.body.getElementsByTagName( 'h1' )[ 0 ];
                this.buttonAuthor = this.body.getElementsByClassName( 'js-btn-author' )[ 0 ];
                this.buttonVersion = this.body.getElementsByClassName( 'js-btn-version' )[ 0 ];
                this.buttonReset = this.body.getElementsByClassName( 'js-btn-reset' )[ 0 ];
            },
            _duplicate: function () {


2.29% (8 lines) duplicated lines out of 350 total lines of code
```

*You can change the maximum lines allowed to be duplicated ini /gulp-tasks/jscpd.js. By default: 5.*

See [https://www.npmjs.com/package/gulp-jscpd](https://www.npmjs.com/package/gulp-jscpd) for more details.

## JSHint

Result of `gulp jshint` when there's a problem:

```
$ gulp jshint
[18:43:40] Using gulpfile C:\wamp\www\bowboosh\gulpfile.js
[18:43:40] Starting 'jshint'...

src\js\universal-module-definition\App.js
  line 70  col 2  Unnecessary semicolon.

  ‼  1 warning

[18:43:40] | ERROR-HANDLER |JSHint failed for: src\js\universal-module-definition\App.js
[18:43:40] Finished 'jshint' after 555 ms
```

Result when it's ok:

```
$ gulp jshint
[18:44:53] Using gulpfile C:\wamp\www\bowboosh\gulpfile.js
[18:44:53] Starting 'jshint'...
[18:44:54] Finished 'jshint' after 566 ms

```

See [http://jshint.com/docs/](http://jshint.com/docs/) for more details.


## Plato Reporting
Run `gulp plato-report` will generate report in ./dist/docs/plato-report
See [https://github.com/es-analysis/plato](https://github.com/es-analysis/plato) for more details.

**Demo**
Example result is available here: [JSDoc Bowboosh](http://demo.proustib.at/bowboosh/docs/plato-report)



_____



# Documentations

## Javascript (JSDoc)

Use `gulp build-jsdoc` to generate javascript documentation.

Each javascript apps are documented in different directories, for example :

```
./dist
├───docs
    ├───javascript
        ├───simple-module-pattern
        └───universal-module-definition
```

*If you wanna watch your javascript files and build documentation on each changes, run `gulp watch-jsdoc`*

See [http://usejsdoc.org/](http://usejsdoc.org/) for more details.

**Demo**
Examples results are available here:
- [JSDoc Bowboosh - classical](http://demo.proustib.at/bowboosh/docs/javascript/classical/)
- [JSDoc Bowboosh - classical bis](http://demo.proustib.at/bowboosh/docs/javascript/classical-bis/)
- [JSDoc Bowboosh - smp](http://demo.proustib.at/bowboosh/docs/javascript/simple-module-pattern/)
- [JSDoc Bowboosh - umd](http://demo.proustib.at/bowboosh/docs/javascript/universal-module-pattern/)


## Sass Doc
Use `gulp build-sassdoc` to generate sassdoc documentation.

See [http://usejsdoc.org/](http://sassdoc.com/) for more details about how to write comments in your source files.
Result for this example in Bowboosh is available [here](http://demo.proustib.at/bowboosh/docs/sass)


_____



# Customization
## config.json
**Application default configuration file**

 ```
 {
   "publicPath": "./dist",                  // Path: public output web site or app to publish
   "srcPath": "./src",                      // Path: development source files
   "bowerDir": "./bower_components",        // Directory name for bower
   "fontsDir": "fonts",                     // Directory name for font files, uses the same name for src or public path
   "cssDir": "css",                         // Directory name for style files, uses the same name for src (scss files) or public path (css files)
   "javascript": {
     "dir": "js",                           // Direcory name for javascript files, uses the same name for src or public path
     "outputFile": "main",                  // Name of javascript public file (will be changed into 'name.min.js'
     "subdir": {                            // Subdirectories of javascript files
       "smp": "simple-module-pattern",
       "umd": "universal-module-definition",
       "common": "common-js",
       "amd": "amd-js",
       "requirejs": "require-js"
     }
   },
   "imgDir": "img",                         // Directory name for image files, uses the same name for src or public path
   "documentation": {
     "rootPath": "./dist",                   // Public root path where are generated documentations
     "dir": "docs",                          // Main directory
     "jsdir": "javascript",                  // Specific subdirectory for javascript documentation
     "style": "sass",                        // Specific subdirectory fir style documentation
     "plato": "plato-report"                 // Specific subdirectory for plato reports
   },
   "vendorDir": "vendor",                   // Directory name for libraries in public directory
   "vendorName" : "libs.js",                // Name of bower components compiled into one javascript file
   "modernizrName": "custom-modernizr.js",  // Name of the custom modernizr file
   "bootstrapTheme": "lumen",               // Bootswatch theme: "cerulean", "cosmo", "cyborg", "darkly", "flatly", "journal", "lumen", "paper", "readable", "sandstone", "simplex", "superhero", "united", "yeti"
   "basesiteList": [                        // List of static files to copy from sources to public
     ".htaccess",
     "apple-touch-icon.png",
     "crossdomain.xml",
     "favicon.ico",
     "index.html",
     "robots.txt",
     "tile.png",
     "tile-wide.png"
   ]
 }
 ```

## Modernizr
**./modernizr-config.json**
See [Modernizr documentation](https://modernizr.com/docs) for more details.

```
{
  "classPrefix": "has-",
  "options": [
    "addTest",
    ...
    "testStyles"
  ],
  "feature-detects": [
    "canvas",
    ...
    "eventlistener"
  ]
}
```
See complete file [here](./modernizr-config.json)


## JSHint
**.jshintrc**
File with comments for each properties [here](./.jshintrc)
See [JSHint documentation](http://jshint.com/docs) for more details

```
{
  "maxerr": 50,
  "bitwise": true,
  "camelcase": false,
  "curly": true,
    ...
    ...
    ...
  "globals": {
    "window": false
  }
}
```

### Priavte fata file with credentials
**./credentials.json**
:warning: Don't commit it!
It contains secret keys, api keys, hosts name and passwords, etc.
It looks like:

```
{
    "host": "164.129.01.86",
    "user": "username",
    "password": "password-of-the-user",
    "remoteBase": "/var/www/html"
}
```


_____



# Npm Packages

## Dependencies

- [bower](https://github.com/bower/bower): The browser package manager
- [gulp](https://github.com/gulpjs/gulp): The streaming build system

## Dev Dependencies

- [bowboosh-tools](https://github.com/proustibat/bowboosh-tools): Utilities for bowboosh boilerplate
- [chokidar](https://github.com/paulmillr/chokidar): A neat wrapper around node.js fs.watch / fs.watchFile / fsevents.
- [del](https://github.com/sindresorhus/del): Delete files/folders using globs
- [gulp](https://github.com/gulpjs/gulp): The streaming build system
- [gulp-bower](https://github.com/zont/gulp-bower): Install Bower packages.
- [gulp-complexity](https://github.com/alexeyraspopov/gulp-complexity): A JavaScript complexity analysis gulp task
- [gulp-concat](https://github.com/wearefractal/gulp-concat): Concatenates files
- [gulp-file](https://github.com/alexmingoia/gulp-file): Create vinyl files from a string or buffer and insert into the Gulp pipeline.
- [gulp-filter](https://github.com/sindresorhus/gulp-filter): Filter files in a vinyl stream
- [gulp-header](https://github.com/tracker1/gulp-header): Gulp extension to add header to file(s) in the pipeline.
- [gulp-help](https://github.com/chmontgomery/gulp-help): Adds a default help task to gulp and provides the ability to add custom help messages to your gulp tasks
- [gulp-if](https://github.com/robrich/gulp-if): Conditionally run a task
- [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin): Minify PNG, JPEG, GIF and SVG images
- [gulp-jscpd](https://github.com/yannickcr/gulp-jscpd): Gulp plugin for the copy/paste detector jscpd
- [gulp-jsdoc3](https://github.com/mlucool/gulp-jsdoc3): gulp integration for jsdoc3 cli
- [gulp-jshint](https://github.com/spalger/gulp-jshint): JSHint plugin for gulp
- [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins): Automatically load any gulp plugins in your package.json
- [gulp-load-subtasks](https://github.com/skorlir/gulp-load-subtasks): A globular loader for gulp subtasks
- [gulp-notify](https://github.com/mikaelbr/gulp-notify): gulp plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module. Fallbacks to Growl or simply logging
- [gulp-plumber](https://github.com/floatdrop/gulp-plumber): Prevent pipe breaking caused by errors from gulp plugins
- [gulp-sass](https://github.com/dlmanning/gulp-sass): Gulp plugin for sass
- [gulp-sftp](https://github.com/gtg092x/gulp-sftp): Upload files via SSH
- [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps): Source map support for Gulp.js
- [gulp-uglify](https://github.com/terinjokes/gulp-uglify): Minify files with UglifyJS.
- [gulp-umd](https://github.com/eduardolundgren/gulp-umd): Gulp plugin for build JavaScript files as Universal Module Definition, aka UMD.
- [gulp-util](https://github.com/gulpjs/gulp-util): Utility functions for gulp plugins
- [jshint](https://github.com/jshint/jshint): Static analysis tool for JavaScript
- [jshint-stylish](https://github.com/sindresorhus/jshint-stylish): Stylish reporter for JSHint
- [main-bower-files](https://github.com/ck86/main-bower-files): Get main files from your installed bower packages.
- [modernizr](https://github.com/Modernizr/Modernizr): Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.
- [plato](https://github.com/es-analysis/plato): JavaScript source analysis and visualizer
- [run-sequence](https://github.com/OverZealous/run-sequence): Run a series of dependent gulp tasks in order
- [sassdoc](https://github.com/SassDoc/sassdoc): Release the docs!
- [yargs](https://github.com/yargs/yargs): yargs the modern, pirate-themed, successor to optimist.



_____



# Bower packages
- [bootstrap](http://getbootstrap.com) The most popular front-end framework for developing responsive, mobile first projects on the web
- [bootstrap-sass](https://github.com/twbs/bootstrap-sass) bootstrap-sass is a Sass-powered version of Bootstrap 3, ready to drop right into your Sass powered applications
- [font-awesome](https://github.com/FortAwesome)
- [jquery](https://github.com/jquery)
- [bootswatch](http://bootswatch.com) Bootswatch is a collection of themes for Bootstrap

_____

# License
[MIT](./LICENSE)


_____

*Generated vith the help of [package-json-to-readme](https://github.com/zeke/package-json-to-readme)
and [DocToc](https://github.com/thlorenz/doctoc).*
