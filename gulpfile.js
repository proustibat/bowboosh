"use strict";

var config = require( './config.json' );

var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    notify = require( "gulp-notify" ),
    bower = require( 'gulp-bower' ),
    mainBowerFiles = require( 'main-bower-files' ),
    uglify = require( 'gulp-uglify' ),
    concat = require( 'gulp-concat' );

/**
 * Runs bower install including in the gulpfile,
 * contributors only have to run gulp bower and have
 * them all setup and ready
 */

gulp.task( 'bower', function () {
        return bower()
            .pipe( gulp.dest( config.bowerDir ) );
    }
);


/**
 * Copy fonts from fontawesome to public directory
 */
gulp.task( 'icons', function () {
        return gulp.src( config.bowerDir + '/font-awesome/fonts/**.*' )
            .pipe( gulp.dest( config.publicPath + '/' + config.fontsDir ) );
    }
);

// copy bootstrap required fonts to dest
gulp.task( 'fonts', function () {
        return gulp
            .src( [
                    config.srcPath + '/' + config.fontsDir + '/*.*',
                    config.bowerDir + '/bootstrap-sass/' + 'assets/fonts/**/*'
                ]
            )
            .pipe( gulp.dest( config.publicPath + '/' + config.fontsDir ) );
    }
);

// compile scss
gulp.task( 'sass', [ 'fonts', 'icons' ], function () {
        return gulp.src( config.srcPath + '/css/main.scss' )
            .pipe( sass( {
                    outputStyle: 'nested',
                    precison: 3,
                    errLogToConsole: true,
                    includePaths: [
                        config.bowerDir + '/bootstrap-sass/' + 'assets/stylesheets',
                        config.bowerDir + '/font-awesome/scss'
                    ]
                })
            )
            .pipe( gulp.dest( config.publicPath + '/css/' ) );
    }
);

// compile bower javascript files
gulp.task( 'vendorjs', function () {
        return gulp.src( mainBowerFiles('**/*.js'), { base: config.bowerDir } )
            .pipe( concat( 'libs.js' ) )
            .pipe( uglify() )
            .pipe( gulp.dest( config.publicPath + '/js/vendor' ) );
    }
);


// default task
gulp.task( 'default', [ 'sass', 'vendorjs' ], function () {
        gulp.watch( config.srcPath + '/' + config.cssDir + '/**/*.scss', [ 'sass' ] );
        gulp.watch( config.bowerDir + '/**/*.js', [ 'vendorjs' ] );
    }
);