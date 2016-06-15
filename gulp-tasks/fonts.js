'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Copy bootstrap required fonts and custom fonrs from sources
     */
    gulp.task( 'build-fonts', 'Copy all fonts source into public directory', function () {
            return gulp
                .src( [
                        config.srcPath + '/' + config.fontsDir + '/*.*',                // custom icons or fonts
                        config.bowerDir + '/font-awesome/fonts/**.*',                   // font-awesome icons font
                        config.bowerDir + '/bootstrap-sass/' + 'assets/fonts/**/*'      // bootstrap glyphicons
                    ]
                )
                .pipe( plugins.plumber( { errorHandler: plugins.errorHandler } ) )
                .pipe( gulp.dest( config.publicPath + '/' + config.fontsDir ) );
        }
    );

    gulp.task( 'watch-fonts', 'Watch scss files sources', [ 'build-fonts' ], function () {
            plugins.tools.spy( [
                    config.srcPath + '/' + config.fontsDir + '/*.*',                // custom icons or fonts
                    config.bowerDir + '/font-awesome/fonts/**.*',                   // font-awesome icons font
                    config.bowerDir + '/bootstrap-sass/' + 'assets/fonts/**/*'      // bootstrap glyphicons
                ], [ 'build-fonts' ]
            );
        }
    );

};