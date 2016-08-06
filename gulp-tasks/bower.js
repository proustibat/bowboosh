'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Runs bower install including in the gulpfile,
     * contributors only have to run this and have
     * them all setup and ready
     */
    gulp.task( 'install-bower', 'Get all setup and ready', function () {
            return plugins.bower()
                .pipe( gulp.dest( config.bowerDir ) );
        }
    );
};