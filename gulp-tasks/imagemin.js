'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'imagemin', "Optimize images", function () {
            return gulp.src( config.srcPath + '/' + config.imgDir + '/*' )
                .pipe( plugins.imagemin() )
                .pipe( gulp.dest( config.publicPath + '/' + config.imgDir ) );
        }
    );

};