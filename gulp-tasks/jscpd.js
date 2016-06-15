"use strict";
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    gulp.task( 'jscpd', 'Run copy paste detector tool', function () {
            return gulp.src( config.srcPath + '/' + config.javascript.dir + '/**/*.js' )
                .pipe( plugins.plumber( { errorHandler: plugins.errorHandler } ) )
                .pipe( plugins.jscpd( {
                        // Min size of duplication in code lines, default to 5
                        'min-lines': 5,
                        // Show full info about copies, default to false.
                        verbose: true
                    }
                    )
                );
        }
    );
};
