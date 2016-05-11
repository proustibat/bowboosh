"use strict";

var config = require( './config.json' );

var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    notify = require( "gulp-notify" ),
    bower = require( 'gulp-bower' );

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
        console.log( config.publicPath + '/' + config.fontsDir );
        return gulp.src( config.bowerDir + '/font-awesome/fonts/**.*' )
            .pipe( gulp.dest( config.publicPath + '/' + config.fontsDir + '/font-awesome' ) );
    }
);

// copy bootstrap required fonts to dest
gulp.task('fonts', ['icons'],  function () {
    return gulp
        .src([
            config.srcPath + '/'+ config.fontsDir +'/*.*',
            config.bowerDir + '/bootstrap-sass/' + 'assets/fonts/**/*'
        ])
        .pipe(gulp.dest(config.publicPath + '/' + config.fontsDir));
});

// compile scss
gulp.task('sass', ['fonts'], function () {
    return gulp.src(config.srcPath + '/css/main.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precison: 3,
            errLogToConsole: true,
            includePaths: [config.bowerDir + '/bootstrap-sass/' + 'assets/stylesheets']
        }))
        .pipe(gulp.dest(config.publicPath + '/css/'));
});

// default task
gulp.task('default', ['sass'], function () {
    gulp.watch(config.srcPath + '/css/**/*', ['sass']);
});