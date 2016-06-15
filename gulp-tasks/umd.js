'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'build-umd', 'Build javascript file from UMD javascript modules sources', function () {
            return gulp.src( config.srcPath + '/js/' + config.javascript.subdir.umd + '/**/*.js' )
                .pipe( plugins.plumber( { errorHandler: plugins.errorHandler } ) )
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
                .pipe( plugins.concat( config.javascript.outputFile + '.min.js' ) )
                .pipe( plugins.sourcemaps.write() )
                .pipe( plugins.header( plugins.banner, { pkg: pkg } ) )
                .pipe( gulp.dest( config.publicPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.umd ) );
        }
    );


    gulp.task( 'watch-umd', 'Watch UMD modules javascript files', [ 'build-umd' ], function () {
            plugins.spy( config.srcPath + '/js/' + config.javascript.subdir.umd + '/**/*.js', [ 'build-umd' ] );
        }
    );
};