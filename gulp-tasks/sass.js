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
            return gulp.src( config.srcPath + '/css/main.scss' )
            // TODO: use gulp-changed
                .pipe( plugins.sourcemaps.init() )
                .pipe( plugins.sass( {
                        outputStyle: 'nested',
                        precison: 3,
                        errLogToConsole: true,
                        includePaths: [
                            config.bowerDir + '/bootstrap-sass/' + 'assets/stylesheets',
                            config.bowerDir + '/font-awesome/scss'
                        ]
                    }
                    )
                )
                .pipe( plugins.sourcemaps.write() )
                .pipe( plugins.header( plugins.banner, { pkg: pkg } ) )
                .pipe( gulp.dest( config.publicPath + '/css/' ) );
        }
    );


    gulp.task( 'watch-sass', 'Watch scss files sources', [ 'build-sass', /* todo : 'watch-bootswatch-theme', */'watch-fonts' ], function () {
            gulp.watch( config.srcPath + '/' + config.cssDir + '/**/*.scss', [ 'build-sass' ] );
        }
    );
};