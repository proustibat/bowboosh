'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {


    gulp.task( 'build-classical-js', 'Build javascript file from classical javascript sources', function () {
            config.env = plugins.tools.getEnv( config );
            return gulp.src( config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.classical + '/**/*.js' )
                .pipe( plugins.plumber( { errorHandler: plugins.tools.errorHandler } ) )
                .pipe( plugins.gulpif( config.env.dev, plugins.sourcemaps.init() ) )
                .pipe( plugins.gulpif( config.env.prod, plugins.uglify( plugins.uglifyOptions ) ) )
                .pipe( plugins.concat( config.javascript.outputFile + '.min.js' ) )
                .pipe( plugins.gulpif( config.env.dev, plugins.sourcemaps.write() ) )
                .pipe( plugins.header( plugins.tools.banner, { pkg: pkg } ) )
                .pipe( gulp.dest( config.publicPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.classical ) );
        }
    );

    gulp.task( 'watch-classical-js', 'Watch classical javascript files', function () {
            config.env.dev = true;
            config.env.prod = false;
            plugins.runSequence(
                [ 'jscpd', 'jshint', 'build-classical-js' ],
                function () {
                    plugins.tools.watch( config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.classical + '/**/*.js', [ 'jscpd', 'jshint', 'build-classical-js' ] );

                }
            );
        }
    );
};