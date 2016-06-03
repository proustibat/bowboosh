'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    gulp.task( 'copy-base', 'Copy basic files in public directory', function () {
            var baseFiles = [];
            for ( var i = 0, l = config.basesiteList.length; i < l; i++ ) {
                baseFiles.push( config.srcPath + '/' + config.basesiteList[ i ] );
            }
            return gulp
                .src( baseFiles )
                .pipe( gulp.dest( config.publicPath + '/' ) );
        }, {
            aliases: [ 'cp-base' ]
        }
    );
};