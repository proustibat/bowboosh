"use strict";
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'clean-all', 'Run all clean tasks', [
        'clean-base',
        'clean-vendor',
        'clean-modernizr',
        'clean-theme-css',
        'clean-css',
        'clean-imagemin'
    ] );

    gulp.task( 'clean-base', 'Delete exported basic boilerplate files ', function () {
            var baseFiles = [];
            for ( var i = 0, l = config.basesiteList.length; i < l; i++ ) {
                baseFiles.push( config.publicPath + '/' + config.basesiteList[ i ] );
            }
            return plugins.del( baseFiles, { force: true } );
        }
    );

    gulp.task( 'clean-vendor', 'Delete compiled vendor file', function () {
            return plugins.del( config.publicPath + '/' + config.jsDir + '/' + config.vendorDir + '/' + config.vendorName,
                { force: true }
            );
        }
    );

    gulp.task( 'clean-modernizr', 'Delete compiled custom modernizr file', function () {
            return plugins.del( config.publicPath + '/' + config.jsDir + '/' + config.vendorDir + '/' + config.modernizrName,
                { force: true }
            );
        }
    );

    gulp.task( 'clean-css', 'Delete compiled css files', function () {
            return plugins.del( config.publicPath + '/' + config.cssDir + '/**/*.css',
                { force: true }
            );
        }
    );

    gulp.task( 'clean-theme-css', 'Delete scss bootswatch theme file', function () {
            return plugins.del( config.srcPath + '/' + config.cssDir + '/theme/*.scss',
                { force: true }
            );
        }
    );

    gulp.task( 'clean-imagemin', 'Delete optimized image in public directory', function () {
            return plugins.del( config.publicPath + '/' + config.imgDir + '/*',
                { force: true }
            );
        }
    );
};