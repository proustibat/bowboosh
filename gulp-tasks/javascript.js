'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {



    // TODO: use gulp rename to build minified and non minified version at the same time

    // TODO : use gulp-filesize
    gulp.task( 'build-javascript', 'Build javascript file from simple javascript modules sources', function () {

            config.env = {};
            config.env.prod = plugins.yargs.argv.prod || config.env.prod || false;
            config.env.dev = plugins.yargs.argv.dev || config.env.dev || !config.env.prod;

            console.log( "dev: ", config.env.dev, " - prod: ", config.env.prod );

            if ( config.env.prod && config.env.dev ) {
                plugins.tools.throwError( 'build-javascript', 'You can\'t build for production and development environments at the same time !' );
            }

            console.log( plugins.tools.getEnv() );

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

    gulp.task( 'watch-javascript', 'Watch simple javascript modules files', [ 'build-javascript' ], function () {
            plugins.tools.spy( config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp + '/**/*.js', [ 'build-javascript' ] );
        }
    );
};