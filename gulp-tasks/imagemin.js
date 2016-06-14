'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'build-imagemin', "Optimize images", [ 'clean-imagemin' ], function () {
            return gulp.src( config.srcPath + '/' + config.imgDir + '/**/*' )
                .pipe( plugins.imagemin() )
                .pipe( gulp.dest( config.publicPath + '/' + config.imgDir ) );
        }
    );

    gulp.task( 'watch-imagemin', 'Watch images sources to reload imagemin task', [ 'build-imagemin' ], function () {
            plugins.chokidar.watch( [ config.srcPath + '/' + config.imgDir + '/**/*' ] ).on( 'all', function ( event, path ) {
                    // console.log( event, path );
                    gulp.start('build-imagemin');
                }
            );

        }
    );

};