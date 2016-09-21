'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    gulp.task( 'copy-base-src', 'Copy basic files in public directory', function () {
            var baseFiles = [];
            for ( var i = 0, l = config.basesiteList.length; i < l; i++ ) {
                baseFiles.push( config.srcPath + '/' + config.basesiteList[ i ] );
            }
            return gulp
                .src( baseFiles )
                .pipe( gulp.dest( config.publicPath + '/' ) );
        }
    );

    gulp.task( 'watch-base-src', 'Watch basic files sources', [ 'clean-base-src', 'copy-base-src' ], function () {
            var baseFiles = [];
            for ( var i = 0, l = config.basesiteList.length; i < l; i++ ) {
                baseFiles.push( config.srcPath + '/' + config.basesiteList[ i ] );
            }
            plugins.tools.watch( baseFiles, [ 'clean-base-src', 'copy-base-src' ] );
        }
    );


    gulp.task( 'add-outdated-browser', 'Copy vendors from bower library "outdated browser" into public directory', function () {
            return gulp
                .src( [
                        config.bowerDir + '/outdated-browser/outdatedbrowser/**/*'
                    ]
                )
                .pipe( gulp.dest( config.publicPath + '/outdatedbrowser' ) );
        }
    );
};