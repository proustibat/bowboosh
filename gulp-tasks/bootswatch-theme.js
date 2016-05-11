'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Copy sass files for theme.
     * Theme name is defined in config file.
     * All themes are downloaded with bower with bootswatch
     */
    gulp.task( 'bootswatch-theme', 'Copy sass files from theme choosen in config', function () {
            return gulp.src( config.bowerDir + '/bootswatch/' + config.bootstrapTheme + '/*.scss' )
                .pipe( gulp.dest( config.srcPath + '/' + config.cssDir + '/theme' ) );
        }, {
            aliases: [ 'bw-theme' ]
        }
    );
};