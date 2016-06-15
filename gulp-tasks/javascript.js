'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {


    // TODO: use gulp rename to build minified and non minified version at the same time

    // TODO : use gulp-filesize
    gulp.task( 'build-javascript', 'Build javascript file from simple javascript modules sources', function () {
            return gulp.src( config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp + '/**/*.js' )
                .pipe( plugins.plumber( { errorHandler: plugins.errorHandler } ) )
                .pipe( plugins.sourcemaps.init() )
                .pipe( plugins.uglify() )
                .pipe( plugins.concat( config.javascript.outputFile + '.min.js' ) )
                .pipe( plugins.sourcemaps.write() )
                .pipe( plugins.header( plugins.banner, { pkg: pkg } ) )
                .pipe( gulp.dest( config.publicPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp ) );
        }
    );

    gulp.task( 'watch-javascript', 'Watch simple javascript modules files', [ 'build-javascript' ], function () {
            plugins.spy( config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp + '/**/*.js', [ 'build-javascript' ] );
        }
    );
};