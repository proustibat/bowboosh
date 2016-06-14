'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    
    gulp.task( 'build-javascript', 'Build javascript file from simple javascript modules sources', function () {
            return gulp.src( config.srcPath + '/js/'+ config.javascript.subdir.smp +'/**/*.js' )
                .pipe( plugins.sourcemaps.init() )
                .pipe( plugins.uglify() )
                .pipe( plugins.concat( config.javascript.outputFile + '.min.js' ) )
                .pipe( plugins.sourcemaps.write() )
                .pipe( gulp.dest( config.publicPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp ) );
        }
    );

    gulp.task( 'watch-javascript', 'Watch simple javascript modules files', [ 'build-javascript' ], function () {
            gulp.watch( config.srcPath + '/js/'+ config.javascript.subdir.smp +'/**/*.js', [ 'build-javascript' ] );
        }
    );
};