'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'build-imagemin', "Optimize images", ['clean-imagemin'], function () {
            return gulp.src( config.srcPath + '/' + config.imgDir + '/**/*' )
                .pipe( plugins.imagemin() )
                .pipe( gulp.dest( config.publicPath + '/' + config.imgDir ) );
        }
    );

    gulp.task( 'watch-imagemin', 'Watch images sources to reload imagemin task', [ 'build-imagemin' ], function () {
            //TODO : handling adding event on watch, currently it doesn't work
            gulp.watch( config.srcPath + '/' + config.imgDir + '/**/*', [ 'build-imagemin' ] ).on('change', function(event) {
                console.log("CHANGE : ", event.type)
            });
        }
    );

};