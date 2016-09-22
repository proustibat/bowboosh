"use strict";
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    gulp.task( 'complexity', 'Run software complexity analysis', function () {
            return gulp.src( config.srcPath + '/' + config.javascript.dir + '/**/*.js' )
                .pipe( plugins.plumber( { errorHandler: plugins.tools.errorHandler } ) )
                .pipe( plugins.complexity( {
                        cyclomatic: [ 7 ],  // [3, 7, 12]
                        halstead: [ 13 ],   // [8, 13, 20]
                        maintainability: 85,
                        breakOnErrors: false,
                        verbose: true
                    }
                    )
                );
        }
    );
};