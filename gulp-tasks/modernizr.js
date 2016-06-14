'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    /**
     *
     */
    gulp.task( "build-modernizr", 'Create a custom modernizr file depending on ./modernizr.config.json', function () {
            plugins.modernizr.build( config.modernizrOptions, function ( result ) {
                    return plugins.file( config.modernizrName, result, { src: true } )
                        .pipe( plugins.uglify() )
                        .pipe( gulp.dest( config.publicPath + '/' + config.javascript.dir + '/' + config.vendorDir ) );

                }
            );
        }
    );

    /**
     * Re-load modernizr options file
     */
    gulp.task( 'reload-modernizr-options', 'Require new modernizr options after changes on modernizr.config.json', function () {
            delete require.cache[ require.resolve( '../modernizr-config.json' ) ];
            var modernizrOptions = require( '../modernizr-config.json' );
            config.modernizrOptions = modernizrOptions;
            plugins.runSequence( 'clean-modernizr', 'build-modernizr' );
        }
    );

    /**
     * Watcher on modernizr options file
     */
    gulp.task( 'watch-modernizr', 'Watch modernizr options to rebuild custom modernizr file', [ 'build-modernizr' ], function () {
            gulp.watch( './modernizr-config.json', [ 'reload-modernizr-options' ] );
        }
    );
};