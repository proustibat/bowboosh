# bowboosh

Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes


## :beginner: Quick usage
```sh
npm install     // install required npm packages then required bower packages
npm start       // start watchers
```

## :open_file_folder: Tree files

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

```
{
  // JSHint Default Configuration File (as on JSHint website)
  // See http://jshint.com/docs/ for more details

  "maxerr": 50,
  // {int} Maximum error before stopping

  // Enforcing
  "bitwise": true,
  // true: Prohibit bitwise operators (&, |, ^, etc.)
  "camelcase": false,
  // true: Identifiers must be in camelCase
  "curly": true,
  // true: Require {} for every new block or scope
  "eqeqeq": true,
  // true: Require triple equals (===) for comparison
  "forin": true,
  // true: Require filtering for..in loops with obj.hasOwnProperty()
  "freeze": true,
  // true: prohibits overwriting prototypes of native objects such as Array, Date etc.
  "immed": false,
  // true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
  "latedef": false,
  // true: Require variables/functions to be defined before being used
  "newcap": false,
  // true: Require capitalization of all constructor functions e.g. `new F()`
  "noarg": true,
  // true: Prohibit use of `arguments.caller` and `arguments.callee`
  "noempty": true,
  // true: Prohibit use of empty blocks
  "nonbsp": true,
  // true: Prohibit "non-breaking whitespace" characters.
  "nonew": false,
  // true: Prohibit use of constructors for side-effects (without assignment)
  "plusplus": false,
  // true: Prohibit use of `++` and `--`
  "quotmark": false,
  // Quotation mark consistency:
  //   false    : do nothing (default)
  //   true     : ensure whatever is used is consistent
  //   "single" : require single quotes
  //   "double" : require double quotes
  "undef": true,
  // true: Require all non-global variables to be declared (prevents global leaks)
  "unused": "vars",
  // Unused variables:
  //   true     : all variables, last function parameter
  //   "vars"   : all variables only
  //   "strict" : all variables, all function parameters
  "strict": true,
  // true: Requires all functions run in ES5 Strict Mode
  "maxparams": false,
  // {int} Max number of formal params allowed per function
  "maxdepth": false,
  // {int} Max depth of nested blocks (within functions)
  "maxstatements": false,
  // {int} Max number statements per function
  "maxcomplexity": false,
  // {int} Max cyclomatic complexity per function
  "maxlen": false,
  // {int} Max number of characters per line
  "varstmt": false,
  // true: Disallow any var statements. Only `let` and `const` are allowed.

  // Relaxing
  "asi": false,
  // true: Tolerate Automatic Semicolon Insertion (no semicolons)
  "boss": false,
  // true: Tolerate assignments where comparisons would be expected
  "debug": false,
  // true: Allow debugger statements e.g. browser breakpoints.
  "eqnull": false,
  // true: Tolerate use of `== null`
  "esversion": 5,
  // {int} Specify the ECMAScript version to which the code must adhere.
  "moz": false,
  // true: Allow Mozilla specific syntax (extends and overrides esnext features)
  // (ex: `for each`, multiple try/catch, function expression…)
  "evil": false,
  // true: Tolerate use of `eval` and `new Function()`
  "expr": false,
  // true: Tolerate `ExpressionStatement` as Programs
  "funcscope": false,
  // true: Tolerate defining variables inside control statements
  "globalstrict": true,
  // true: Allow global "use strict" (also enables 'strict')
  "iterator": false,
  // true: Tolerate using the `__iterator__` property
  "lastsemic": false,
  // true: Tolerate omitting a semicolon for the last statement of a 1-line block
  "laxbreak": false,
  // true: Tolerate possibly unsafe line breakings
  "laxcomma": false,
  // true: Tolerate comma-first style coding
  "loopfunc": false,
  // true: Tolerate functions being defined in loops
  "multistr": false,
  // true: Tolerate multi-line strings
  "noyield": false,
  // true: Tolerate generator functions with no yield statement in them.
  "notypeof": false,
  // true: Tolerate invalid typeof operator values
  "proto": false,
  // true: Tolerate using the `__proto__` property
  "scripturl": false,
  // true: Tolerate script-targeted URLs
  "shadow": false,
  // true: Allows re-define variables later in code e.g. `var x=1; x=2;`
  "sub": false,
  // true: Tolerate using `[]` notation when it can still be expressed in dot notation
  "supernew": false,
  // true: Tolerate `new function () { ... };` and `new Object;`
  "validthis": false,
  // true: Tolerate using this in a non-constructor function

  // Environments
  "browser": true,
  // Web Browser (window, document, etc)
  "browserify": false,
  // Browserify (node.js code in the browser)
  "couch": false,
  // CouchDB
  "devel": true,
  // Development/debugging (alert, confirm, etc)
  "dojo": false,
  // Dojo Toolkit
  "jasmine": false,
  // Jasmine
  "jquery": false,
  // jQuery
  "mocha": true,
  // Mocha
  "mootools": false,
  // MooTools
  "node": false,
  // Node.js
  "nonstandard": false,
  // Widely adopted globals (escape, unescape, etc)
  "phantom": false,
  // PhantomJS
  "prototypejs": false,
  // Prototype and Scriptaculous
  "qunit": false,
  // QUnit
  "rhino": false,
  // Rhino
  "shelljs": false,
  // ShellJS
  "typed": false,
  // Globals for typed array constructions
  "worker": false,
  // Web Workers
  "wsh": false,
  // Windows Scripting Host
  "yui": false,
  // Yahoo User Interface

  // Custom Globals: additional predefined global variables
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
