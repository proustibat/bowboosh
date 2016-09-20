'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'build-js-requirejs', 'Build javascript files from requirejs directory', function () {
            config.env = plugins.tools.getEnv( config );
            return gulp.src( config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.requirejs + '/**/*.js' )
                .pipe( plugins.plumber( { errorHandler: plugins.tools.errorHandler } ) )
                .pipe( plugins.gulpif( config.env.dev, plugins.sourcemaps.init() ) )
                .pipe( plugins.gulpif( config.env.prod, plugins.uglify( plugins.uglifyOptions ) ) )
                    //TODO Allow choice between aync and sync custom modules
                // .pipe( plugins.concat( config.javascript.outputFile + '.min.js' ) )
                .pipe( plugins.gulpif( config.env.dev, plugins.sourcemaps.write() ) )
                .pipe( plugins.header( plugins.tools.banner, { pkg: pkg } ) )
                .pipe( gulp.dest( config.publicPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.requirejs ) );
        }
    );

    gulp.task( 'watch-js-requirejs', 'Watch javascript files from requirejs directory', function () {
            config.env.dev = true;
            config.env.prod = false;
            plugins.runSequence(
                [ 'jscpd', 'jshint', 'build-js-requirejs' ],
                function () {
                    plugins.tools.watch( config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.requirejs + '/**/*.js', [ 'jscpd', 'jshint', 'build-js-requirejs' ] );

                }
            );
        }
    );
};