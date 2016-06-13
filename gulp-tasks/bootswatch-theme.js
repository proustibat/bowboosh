'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Copy sass files for theme.
     * Theme name is defined in config file.
     * All themes are downloaded with bower with bootswatch
     */
    gulp.task( 'bootswatch-theme', 'Copy sass files from theme choosen in config', function () {
            var destination = config.srcPath + '/' + config.cssDir + '/theme';

            plugins.util.log( plugins.util.colors.inverse.bold( 'Theme to build: ' + config.bootstrapTheme ) );
            // If no theme setted
            if ( !config.bootstrapTheme ) {
                plugins.util.log( plugins.util.colors.inverse.bold( "No Bootswatch theme" ) );
                plugins.stringSrc( "_variables.scss", "// empty file because no theme setted" )
                    .pipe( gulp.dest( destination ) );
                plugins.stringSrc( "_bootswatch.scss", "// empty file because no theme setted" )
                    .pipe( gulp.dest( destination ) );
            }
            else {
                return gulp.src( config.bowerDir + '/bootswatch/' + config.bootstrapTheme + '/*.scss' )
                    .pipe( gulp.dest( destination ) );
            }
        }, {
            aliases: [ 'bw-theme' ]
        }
    )
};