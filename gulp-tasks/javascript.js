'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {



    // TODO: use gulp rename to build minified and non minified version at the same time

    // TODO : use gulp-filesize
    gulp.task( 'build-javascript', 'Build javascript file from simple javascript modules sources', function () {
            config.env = plugins.tools.getEnv( config );
            return gulp.src( config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp + '/**/*.js' )
                .pipe( plugins.plumber( { errorHandler: plugins.tools.errorHandler } ) )
                //.pipe( plugins.sourcemaps.init() )
                .pipe( plugins.gulpif( config.env.dev, plugins.sourcemaps.init() ) )
                //.pipe( plugins.uglify() )
                .pipe( plugins.gulpif( config.env.prod, plugins.uglify() ) )
                .pipe( plugins.concat( config.javascript.outputFile + '.min.js' ) )
                //.pipe( plugins.sourcemaps.write() )
                .pipe( plugins.gulpif( config.env.dev, plugins.sourcemaps.write() ) )
                .pipe( plugins.header( plugins.tools.banner, { pkg: pkg } ) )
                .pipe( gulp.dest( config.publicPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp ) );
        }
    );

    gulp.task( 'watch-javascript', 'Watch simple javascript modules files', function () {
            config.env.dev = true;
            config.env.prod = false;
            plugins.runSequence(
                [ 'jscpd', 'jshint', 'build-javascript' ],
                function () {
                    plugins.tools.watch( config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp + '/**/*.js', [ 'jscpd', 'jshint', 'build-javascript' ] );

                }
            );
        }
    );
};