"use strict";
module.exports = function ( gulp, plugins, config, errorHandler ) {
    gulp.task( 'jshint', 'Run JSHINT: tool that helps to detect errors and potential problems in code', function () {
            return gulp.src( [
                    config.srcPath + '/' + config.javascript.dir + '/**/*.js'
                    // exclude files
                    // '!' + config.srcPath + '/' + config.javascript.dir + '/path/to/file.js'
                ]
            )
                .pipe( plugins.gulpJSHint(  ) )
                .pipe( plugins.gulpJSHint.reporter( 'jshint-stylish' ) )
                .pipe(plugins.gulpJSHint.reporter('fail')); // stop the gulp build on fail
        }
    );
};
