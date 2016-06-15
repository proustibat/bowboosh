"use strict";
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    
    // TODO: use gulp-clean

    gulp.task( 'clean-app', 'Delete public directory', [ 'clean-base' ], function () {
            return plugins.del( [
                    config.publicPath + '/**/*',
                    '!' + config.documentation.rootPath,
                    '!' + config.documentation.rootPath + '/' + config.documentation.dir,
                    '!' + config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.jsdir,
                    '!' + config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.jsdir + '/**/*',
                    '!' + config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.style,
                    '!' + config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.style + '/**/*',
                    '!' + config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.plato,
                    '!' + config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.plato + '/**/*',
                ],
                { force: true }
            );
        }
    );

    gulp.task( 'clean-base', 'Delete exported basic boilerplate files', function () {
            var baseFiles = [];
            for ( var i = 0, l = config.basesiteList.length; i < l; i++ ) {
                baseFiles.push( config.publicPath + '/' + config.basesiteList[ i ] );
            }
            return plugins.del( baseFiles, { force: true } );
        }
    );

    gulp.task( 'clean-vendor', 'Delete compiled vendor file', function () {
            return plugins.del( config.publicPath + '/' + config.javascript.dir + '/' + config.vendorDir + '/' + config.vendorName,
                { force: true }
            );
        }
    );

    gulp.task( 'clean-modernizr', 'Delete compiled custom modernizr file', function () {
            return plugins.del( config.publicPath + '/' + config.javascript.dir + '/' + config.vendorDir + '/' + config.modernizrName,
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
            delete require.cache[ config.srcPath + '/' + config.cssDir + '/theme/*.scss' ];
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

    gulp.task( 'clean-fonts', 'Delete fonts directory in public directory', function () {
            return plugins.del( config.publicPath + '/' + config.fontsDir + '/*',
                { force: true }
            );
        }
    );

    gulp.task( 'clean-all-js', 'Delete fonts directory in public directory', function () {
            return plugins.del( config.publicPath + '/' + config.javascript.dir + '/*',
                { force: true }
            );
        }
    );


    gulp.task( 'clean-jsdoc', 'Delete javascript documentation', function () {
            plugins.del( [
                    config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.jsdir
                ], {
                    force: true
                }
            );
        }
    );

};