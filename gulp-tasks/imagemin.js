'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'build-imagemin', "Optimize images", [ 'clean-imagemin' ], function () {
            return gulp.src( config.srcPath + '/' + config.imgDir + '/**/*' )
                .pipe( plugins.plumber( { errorHandler: plugins.tools.errorHandler } ) )
                .pipe( plugins.imagemin() )
                .pipe( gulp.dest( config.publicPath + '/' + config.imgDir ) );
        }
    );

    gulp.task( 'watch-imagemin', 'Watch images sources to reload imagemin task', [ 'build-imagemin' ], function () {
            plugins.tools.watch( [ config.srcPath + '/' + config.imgDir + '/**/*' ], [ 'build-imagemin' ] );
        }
    );

};