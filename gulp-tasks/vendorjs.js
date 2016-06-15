'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Compile libraries used in the project
     * Main bower files are overrided in bower.json
     */
    gulp.task( 'build-vendors', 'Compile libraries used in the project into libs.js in public directory', function () {
            return gulp.src( plugins.mainBowerFiles( '**/*.js' ), { base: config.bowerDir } )
                .pipe( plugins.plumber( { errorHandler: plugins.errorHandler } ) )
                .pipe( plugins.concat( config.vendorName ) )
                .pipe( plugins.uglify() )
                .pipe( gulp.dest( config.publicPath + '/' + config.javascript.dir + '/' + config.vendorDir ) );
        }
    );


    // TODO: build and watch other vendors libs than bower

    gulp.task( 'watch-vendors', 'Watch vendor libraries', [ 'build-vendors' ], function () {
            plugins.spy( config.bowerDir + '/**/*.js', [ 'build-vendors' ] );
        }
    );
};