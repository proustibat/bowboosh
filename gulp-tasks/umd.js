'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'umd', 'Build javascript file from UMD javascript modules sources',  function () {
            return gulp.src( config.srcPath + '/' + '/umd/**/*.js' )
                .pipe( plugins.sourcemaps.init() )
                .pipe( plugins.umd( {
                        dependencies: function ( file ) {
                            return [
                                {
                                    name: 'MyModule',
                                    amd: 'MyModule_amd',
                                    cjs: 'MyModule_cjs',
                                    global: 'MyModule_glob',
                                    param: 'MyModule'
                                }, {
                                    name: 'App',
                                    amd: 'App_amd',
                                    cjs: 'App_cjs',
                                    global: 'App_glob',
                                    param: 'App'
                                }
                            ];
                        }
                    }
                    )
                )
                .pipe( plugins.uglify() )
                .pipe( plugins.concat( config.jsName + '.min.js' ) )
                .pipe( plugins.sourcemaps.write() )
                .pipe( gulp.dest( config.publicPath + '/' + config.jsDir + '/umd' ) );
        }
    );


    gulp.task( 'watch-umd', 'Watch UMD modules javascript files', ['umd'], function () {
            gulp.watch( config.srcPath + '/' + '/umd/**/*.js', [ 'umd' ] );
        }
    );
};