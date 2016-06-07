'use strict';
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'javascript', '', function () {
            return gulp.src( config.srcPath + '/' + config.jsDir + '/**/*.js' )
                .pipe( plugins.sourcemaps.init() )
                .pipe( plugins.uglify() )
                .pipe( plugins.concat( config.jsName + '.min.js' ) )
                .pipe( plugins.sourcemaps.write() )
                .pipe( gulp.dest( config.publicPath + '/' + config.jsDir ) );
        }, {
            aliases: [ 'js' ]
        }
    );
};