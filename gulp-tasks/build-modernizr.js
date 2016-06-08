'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    gulp.task( "build-modernizr", 'Create a custom modernizr file depending on ./modernizr.config.json', function () {
            plugins.modernizr.build( config.modernizrOptions, function ( result ) {
                    return plugins.file( config.modernizrName, result, { src: true } )
                        .pipe( plugins.uglify() )
                        .pipe( gulp.dest( config.publicPath + '/' + config.jsDir + '/' + config.vendorDir ) );

                }
            );
        }
    )
};