'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Copy bootstrap required fonts and custom fonrs from sources
     */
    gulp.task( 'fonts', 'Copy all fonts (bootstrap and custom sources) into public directory', function () {
            return gulp
                .src( [
                        config.srcPath + '/' + config.fontsDir + '/*.*',
                        config.bowerDir + '/bootstrap-sass/' + 'assets/fonts/**/*'
                    ]
                )
                .pipe( gulp.dest( config.publicPath + '/' + config.fontsDir ) );
        }
    );
};