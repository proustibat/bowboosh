'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Copy icons font from font-awesome to public directory
     */
    gulp.task( 'icons', 'Copy font-awesome icons into the public directory', function () {
            return gulp.src( config.bowerDir + '/font-awesome/fonts/**.*' )
                .pipe( gulp.dest( config.publicPath + '/' + config.fontsDir ) );
        }
    );
};