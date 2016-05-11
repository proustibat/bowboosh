"use strict";

/**
 * Configuration files
 */
var config = require( './config.json' ),
    pkg = require('./package.json'),
    bwr = require('./bower.json');

/**
 * Plugins
 */
var gulp = require('gulp-help')(require('gulp')),
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
 * Copy icons font from font-awesome to public directory
 */
gulp.task( 'icons', function () {
        return gulp.src( config.bowerDir + '/font-awesome/fonts/**.*' )
            .pipe( gulp.dest( config.publicPath + '/' + config.fontsDir ) );
    }
);

/**
 * Copy bootstrap required fonts
 */
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


/**
 * Copy sass files for theme.
 * Theme name is defined in config file.
 * All themes are downloaded with bower with bootswatch
 */
gulp.task( 'bootswatch-theme', function () {
        return gulp.src( config.bowerDir + '/bootswatch/'+ config.bootstrapTheme +'/*.scss' )
            .pipe( gulp.dest( config.srcPath + '/' + config.cssDir + '/theme' ) );
    }
);


/**
 * Compile scss files
 *  - bootstrap
 *  - font-awesome
 *  - custom scss files imported in main.scss
 *  If bower components are added in the project and needs
 *  css files, add path in includePaths, then import in main.scss
 */
gulp.task( 'sass', [ 'bootswatch-theme', 'fonts', 'icons' ], function () {
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

/**
 * Compile libraries used in the project
 * Main bower files are overrided in bower.json
 */
gulp.task( 'vendorjs', function () {
        return gulp.src( mainBowerFiles('**/*.js'), { base: config.bowerDir } )
            .pipe( concat( 'libs.js' ) )
            .pipe( uglify() )
            .pipe( gulp.dest( config.publicPath + '/js/vendor' ) );
    }
);


/**
 * Default task when running 'gulp' command mine
 */
gulp.task( 'default', [ 'sass', 'vendorjs' ], function () {
        gulp.watch( config.srcPath + '/' + config.cssDir + '/**/*.scss', [ 'sass' ] );
        gulp.watch( config.bowerDir + '/**/*.js', [ 'vendorjs' ] );
 }
);