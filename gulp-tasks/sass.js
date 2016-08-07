'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Compile scss files
     *  - bootstrap
     *  - font-awesome
     *  - custom scss files imported in main.scss
     *  If bower components are added in the project and needs
     *  css files, add path in includePaths, then import in main.scss
     */
    gulp.task( 'build-sass', 'Compile all scss files of the project into the public directory', [ 'build-bootswatch-theme', 'build-fonts' ], function () {
            config.env = plugins.tools.getEnv( config );
            var options = {
                dev: {
                    outputStyle: 'expansed',
                    precison: 3,
                    errLogToConsole: true,
                    includePaths: [
                        config.bowerDir + '/bootstrap-sass/' + 'assets/stylesheets',
                        config.bowerDir + '/font-awesome/scss'
                    ]
                },
                prod: {
                    outputStyle: 'compressed',
                    precison: 3,
                    errLogToConsole: false,
                    includePaths: [
                        config.bowerDir + '/bootstrap-sass/' + 'assets/stylesheets',
                        config.bowerDir + '/font-awesome/scss'
                    ]
                }
            };
            //TODO : common options and merge

            return gulp.src( config.srcPath + '/css/main.scss' )
                .pipe( plugins.plumber( { errorHandler: plugins.tools.errorHandler } ) )
                // TODO: use gulp-changed
                .pipe( plugins.gulpif( config.env.dev, plugins.sourcemaps.init() ) )
                .pipe( plugins.sass( plugins.gulpif( config.env.dev, options.dev, options.prod ) ) )
                .on( 'error', plugins.tools.errorHandler )
                .pipe( plugins.gulpif( config.env.dev, plugins.sourcemaps.write() ) )
                //.pipe( plugins.header( plugins.tools.banner, { pkg: pkg } ) )
                //.pipe( plugins.license( plugins.tools.banner, { pkg: pkg } ) )
                .pipe( gulp.dest( config.publicPath + '/css/' ) );
        }
    );


    gulp.task( 'watch-sass', 'Watch scss files sources', [ 'build-sass' ], function () {
            config.env.dev = true;
            config.env.prod = false;
            plugins.runSequence(
                [ 'build-sass', /* todo : 'watch-bootswatch-theme', */'watch-fonts' ],
                function () {
                    plugins.tools.watch( config.srcPath + '/' + config.cssDir + '/**/*.scss', [ 'build-sass' ] );

                }
            );
        }
    );
};