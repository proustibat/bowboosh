'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Compile libraries used in the project
     * Main bower files are overrided in bower.json
     */
    gulp.task( 'vendorjs', 'Compile libraries used in the project into libs.js in public directory', function () {
            return gulp.src( plugins.mainBowerFiles( '**/*.js' ), { base: config.bowerDir } )
                .pipe( plugins.concat( 'libs.js' ) )
                .pipe( plugins.uglify() )
                .pipe( gulp.dest( config.publicPath + '/js/vendor' ) );
        }
    );
};