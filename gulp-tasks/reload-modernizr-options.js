'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    /**
     * Re-load modernizr options file
     */
    gulp.task( 'reload-modernizr-options', 'Require new modernizr options after changes on modernizr.config.json', function () {
            delete require.cache[ require.resolve( '../modernizr-config.json' ) ];
            var modernizrOptions = require( '../modernizr-config.json' );
            config.modernizrOptions = modernizrOptions;
            plugins.runSequence( 'clean-modernizr', 'build-modernizr' );
        }
    );
};