# bowboosh

HTML5 boilerplate with NPM, Gulp, Bower, Bootstrap Sass, Font-awesome, Bootswatch themes, deployment tasks, documentation and code analysis tasks.


## Demo
- Master: [http://demo.proustib.at/bowboosh/](http://demo.proustib.at/bowboosh/)

_____

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [:beginner: Quick usage](#beginner-quick-usage)
- [:open_file_folder: Tree files](#open_file_folder-tree-files)
- [:customs: Customization](#customs-customization)
  - [./config.json: Application default configuration file](#configjson-application-default-configuration-file)
  - [./modernizr-config.json: Modernizr default configuration file](#modernizr-configjson-modernizr-default-configuration-file)
  - [.jshintrc: JSHint default configuration file](#jshintrc-jshint-default-configuration-file)
  - [./credentials.json: Private data file](#credentialsjson-private-data-file)
- [:grey_question: Help](#grey_question-help)
- [Main features](#main-features)
  - [Watchers for development and build for production](#watchers-for-development-and-build-for-production)
  - [Deploy on server](#deploy-on-server)
  - [Analyses and documentation](#analyses-and-documentation)
    - [Complexity](#complexity)
    - [Copy paste detector](#copy-paste-detector)
    - [JShint](#jshint)
    - [JSDoc](#jsdoc)
    - [Sass Doc](#sass-doc)
    - [Plato reporting](#plato-reporting)
- [Npm Packages](#npm-packages)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
- [Bower packages](#bower-packages)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- Run doctoc README.md --github  -->
<!-- Informations: https://github.com/thlorenz/doctoc -->

_____


## :beginner: Quick usage
```sh
npm install     // install required npm packages then required bower packages
npm start       // start watchers
```

## :open_file_folder: File tree

```
./
|   .gitignore
|   .jshintrc
|   bower.json
|   config.json                 // Main app configuration file
|   credentials.json            // Private configuration file
|   gulpfile.js                 // Main Gulp file configuration
|   LICENSE
|   modernizr-config.json       // Modernizr configuration to build custom library
|   package.json                // Main NPM file configuration
|   README.md
|
+---dist                        // Public directory
|
+---docs                        // Generated documentations
|   +---jsdoc                   // Documentation for javascript sources
|   |
|   \---plato                   // Complexity report with plato
|
+---gulp-tasks                  // Gulp developer tasks loaded in Gulpfile.js
|
\---src                         // Sources files
    |   .htaccess
    |   apple-touch-icon.png
    |   crossdomain.xml
    |   favicon.ico
    |   index.html
    |   robots.txt
    |   tile-wide.png
    |   tile.png
    |
    +---css                     // Sass sources
    |   |   general.scss
    |   |   main.scss           // Main scss file that imports others
    |   |
    |   \---theme               // Bootswatch theme scss files (copied with a gulp task)
    |
    +---img                     // Images assets
    |
    \---js                      // Javascript source files

```

## :customs: Customization
### ./config.json: Application default configuration file

 ```
 {
   "publicPath": "./dist",                  // Path: public output web site or app to publish
   "srcPath": "./src",                      // Path: development source files
   "bowerDir": "./bower_components",        // Directory name for bower
   "fontsDir": "fonts",                     // Directory name for font files, uses the same name for src or public path
   "cssDir": "css",                         // Directory name for style files, uses the same name for src (scss files) or public path (css files)
   "jsDir": "js",                           // Direcory name for javascript files, uses the same name for src or public path
   "jsName": "main",                        // Name of javascript public file (will be changed into 'name.min.js'
   "imgDir": "img",                         // Directory name for image files, uses the same name for src or public path
   "docDir": "docs",                        // Path: for generated documentations
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

### ./modernizr-config.json: Modernizr default configuration file
See [Modernizr documentation](https://modernizr.com/docs) for more details.

```
{
  "classPrefix": "has-",
  "options": [
    "addTest",
    "atRule",
    "domPrefixes",
    "hasEvent",
    "html5shiv",
    "html5printshiv",
    "load",
    "mq",
    "prefixed",
    "prefixes",
    "prefixedCSS",
    "setClasses",
    "testAllProps",
    "testProp",
    "testStyles"
  ],
  "feature-detects": [
    "canvas",
    "css/all",
    "ie8compat",
    "postmessage",
    "svg",
    "touchevents",
    "video",
    "audio",
    "webanimations",
    "webgl",
    "storage/localstorage",
    "storage/sessionstorage",
    "pointerevents",
    "notification",
    "eventlistener"
  ]
}
```



### .jshintrc: JSHint default configuration file

See [JSHint documentation](http://jshint.com/docs) for more details
File with comments for each properties [here](./.jshintrc)

```
{
  "maxerr": 50,
  "bitwise": true,
  "camelcase": false,
  "curly": true,
  "eqeqeq": true,
  "forin": true,
  "freeze": true,
  "immed": false,
  "latedef": false,
  "newcap": false,
  "noarg": true,
  "noempty": true,
  "nonbsp": true,
  "nonew": false,
  "plusplus": false,
  "quotmark": false,
  "undef": true,
  "unused": "vars",
  "strict": true,
  "maxparams": false,
  "maxdepth": false,
  "maxstatements": false,
  "maxcomplexity": false,
  "maxlen": false,
  "varstmt": false,
  "asi": false,
  "boss": false,
  "debug": false,
  "eqnull": false,
  "esversion": 5,
  "moz": false,
  "evil": false,
  "expr": false,
  "funcscope": false,
  "globalstrict": true,
  "iterator": false,
  "lastsemic": false,
  "laxbreak": false,
  "laxcomma": false,
  "loopfunc": false,
  "multistr": false,
  "noyield": false,
  "notypeof": false,
  "proto": false,
  "scripturl": false,
  "shadow": false,
  "sub": false,
  "supernew": false,
  "validthis": false,
  "browser": true,
  "browserify": false,
  "couch": false,
  "devel": true,
  "dojo": false,
  "jasmine": false,
  "jquery": false,
  "mocha": true,
  "mootools": false,
  "node": false,
  "nonstandard": false,
  "phantom": false,
  "prototypejs": false,
  "qunit": false,
  "rhino": false,
  "shelljs": false,
  "typed": false,
  "worker": false,
  "wsh": false,
  "yui": false,
  "globals": {
    "window": false
  }
}
```

### ./credentials.json: Private data file
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

## :grey_question: Help
All available gulp tasks are visible, run `gulp h` or ` npm run help`

Result:

```
  bootswatch-theme          Copy sass files from theme choosen in config Aliases: bw-theme
  bower                     Get all setup and ready Aliases: install, setup
  build-modernizr           Create a custom modernizr file depending on ./modernizr.config.json
  clean-all                 Run all clean tasks
  clean-base                Delete exported basic boilerplate files
  clean-css                 Delete compiled css files
  clean-imagemin            Delete optimized image in public directory
  clean-modernizr           Delete compiled custom modernizr file
  clean-theme-css           Delete scss bootswatch theme file
  clean-vendor              Delete compiled vendor file
  complexity                Run software complexity analysis
  copy-base                 Copy basic files in public directory Aliases: cp-base
  default
  del-jsdoc                 Delete javascript documentation
  deploySFTP                Push changes to remote servers (eg: staging/production)
  dev-doc                   Watch javascript files to regenerate documentation
  doc                       Generate javascript documentation
  fonts                     Copy all fonts (bootstrap and custom sources) into public directory
  help                      Display this help text. Aliases: h, ?
  icons                     Copy font-awesome icons into the public directory
  imagemin                  Optimize images
  javascript                Aliases: js
  jscpd                     Run copy paste detector tool
  jshint                    Run JSHINT: tool that helps to detect errors and potential problems in code
  plato-report              Run Plato: javaScript source analysis and visualizer
  reload-config             Require new config after changes on config.json
  reload-modernizr-options  Require new modernizr options after changes on modernizr.config.json
  sass                      Compile all scss files of the project into the public directory
  vendorjs                  Compile libraries used in the project into libs.js in public directory
  watch                     Aliases: dev
```

## Main features

### Watchers for development and build for production

- Scss files compilation: bootstrap, bootswatch theme, core application
- Font icons (font-awesome)
- Javascript files compilation: core applicaiton and vendors
- Image Optimization (`gulp-imagemin`)
- Build modernizr library

### Deploy on server

Via SFTP protocole (`using gulp-sftp`)

Run:

```
npm run deploy
```
or

```
gulp deploySFTP --host="164.129.01.86" --user="username" --password="password-of-the-user" --remoteBase="var/www/html"
```

### Analyses and documentation

#### Complexity
See [http://jscomplexity.org/complexity](http://jscomplexity.org/complexity) and [https://github.com/escomplex/complexity-report](https://github.com/escomplex/complexity-report) for more details.

#### Copy paste detector
See [https://www.npmjs.com/package/gulp-jscpd](https://www.npmjs.com/package/gulp-jscpd) for more details.

#### JShint
See [http://jshint.com/docs/](http://jshint.com/docs/) for more details.

#### JSDoc
See [http://usejsdoc.org/](http://usejsdoc.org/) for more details.
Example result is available here: [JSDoc Bowboosh](http://demo.proustib.at/bowboosh/docs/jsdoc)

#### Sass Doc
//

#### Plato reporting
See [https://github.com/es-analysis/plato](https://github.com/es-analysis/plato) for more details.
Example result is available here: [JSDoc Bowboosh](http://demo.proustib.at/bowboosh/docs/plato)

## Npm Packages
### Dependencies

- [bower](https://github.com/bower/bower): The browser package manager
- [gulp](https://github.com/gulpjs/gulp): The streaming build system
- [gulp-tag-version](https://github.com/ikari-pl/gulp-tag-version): Tag git repository with current package version

### Dev Dependencies

- [del](https://github.com/sindresorhus/del): Delete files/folders using globs
- [gulp-bower](https://github.com/zont/gulp-bower): Install Bower packages.
- [gulp-complexity](https://github.com/alexeyraspopov/gulp-complexity): A JavaScript complexity analysis gulp task
- [gulp-concat](https://github.com/wearefractal/gulp-concat): Concatenates files
- [gulp-file](https://github.com/alexmingoia/gulp-file): Create vinyl files from a string or buffer and insert into the Gulp pipeline.
- [gulp-filter](https://github.com/sindresorhus/gulp-filter): Filter files in a vinyl stream
- [gulp-help](https://github.com/chmontgomery/gulp-help): Adds a default help task to gulp and provides the ability to add custom help messages to your gulp tasks
- [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin): Minify PNG, JPEG, GIF and SVG images
- [gulp-jscpd](https://github.com/yannickcr/gulp-jscpd): Gulp plugin for the copy/paste detector jscpd
- [gulp-jsdoc3](https://github.com/mlucool/gulp-jsdoc3): gulp integration for jsdoc3 cli
- [gulp-jshint](https://github.com/spalger/gulp-jshint): JSHint plugin for gulp
- [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins): Automatically load any gulp plugins in your package.json
- [gulp-load-subtasks](https://github.com/skorlir/gulp-load-subtasks): A globular loader for gulp subtasks
- [gulp-notify](https://github.com/mikaelbr/gulp-notify): gulp plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module. Fallbacks to Growl or simply logging
- [gulp-sass](https://github.com/dlmanning/gulp-sass): Gulp plugin for sass
- [gulp-sftp](https://github.com/gtg092x/gulp-sftp): Upload files via SSH
- [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps): Source map support for Gulp.js
- [gulp-uglify](https://github.com/terinjokes/gulp-uglify): Minify files with UglifyJS.
- [gulp-util](https://github.com/gulpjs/gulp-util): Utility functions for gulp plugins
- [jshint](https://github.com/jshint/jshint): Static analysis tool for JavaScript
- [jshint-stylish](https://github.com/sindresorhus/jshint-stylish): Stylish reporter for JSHint
- [main-bower-files](https://github.com/ck86/main-bower-files): Get main files from your installed bower packages.
- [modernizr](https://github.com/Modernizr/Modernizr): Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.
- [plato](https://github.com/es-analysis/plato): JavaScript source analysis and visualizer
- [run-sequence](https://github.com/OverZealous/run-sequence): Run a series of dependent gulp tasks in order
- [yargs](https://github.com/yargs/yargs): yargs the modern, pirate-themed, successor to optimist.


## Bower packages
- [bootstrap](http://getbootstrap.com) The most popular front-end framework for developing responsive, mobile first projects on the web
- [bootstrap-sass](https://github.com/twbs/bootstrap-sass) bootstrap-sass is a Sass-powered version of Bootstrap 3, ready to drop right into your Sass powered applications
- [font-awesome](https://github.com/FortAwesome)
- [jquery](https://github.com/jquery)
- [bootswatch](http://bootswatch.com) Bootswatch is a collection of themes for Bootstrap


## License
[MIT](./LICENSE)


_____

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
