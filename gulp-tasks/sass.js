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
    gulp.task( 'sass', 'Compile all scss files of the project into the public directory', [ 'bootswatch-theme', 'fonts', 'icons' ], function () {
            return gulp.src( config.srcPath + '/css/main.scss' )
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
                .pipe( gulp.dest( config.publicPath + '/css/' ) );
        }
    );
};