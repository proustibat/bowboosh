"use strict";
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    gulp.task( 'clean-base', 'Delete exported files', function () {
            var baseFiles = [];
            for ( var i = 0, l = config.basesiteList.length; i < l; i++ ) {
                baseFiles.push( config.publicPath + '/' + config.basesiteList[ i ] );
            }
            return plugins.del( baseFiles, { force: true } );
        }, {
            aliases: [ 'clear-base', 'del-base', 'clr-base' ]
        }
    );
};