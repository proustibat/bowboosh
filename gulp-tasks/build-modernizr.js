'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    gulp.task( "build-modernizr", function () {
            plugins.modernizr.build( config.modernizrOptions, function ( result ) {
                    return plugins.file( config.modernizrName, result, { src: true } )
                        .pipe( plugins.uglify() )
                        .pipe( gulp.dest( config.publicPath + '/' + config.jsDir + '/' + config.vendorDir ) );

                }
            );
        }
    )
};