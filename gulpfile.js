"use strict";

/**
 * Configuration files
 */
var config = require( './config.json' ),
    pkg = require( './package.json' ),
    bwr = require( './bower.json' );

var modernizrOptions = require( './modernizr-config.json' );
config.modernizrOptions = modernizrOptions;

/**
 * Main Plugins
 */
var gulp = require( 'gulp-help' )( require( 'gulp' ), {
        aliases: [ 'h', '?' ],
        hideEmpty: false,
        hideDepsMessage: false,
        afterPrintCallback: function () {
        }
    }
    ),
    plugins = require( 'gulp-load-plugins' )( {
            scope: [ 'devDependencies' ],
            pattern: '*',
            rename: {
                'main-bower-files': 'mainBowerFiles',
                'argv': 'yargs',
                'gulp-jsdoc3': 'jsdoc',
                'gulp-jshint': 'gulpJSHint'

            },
            lazy: true
        }
    );

// Require all tasks
plugins.loadSubtasks( './gulp-tasks/**/*.js', plugins, config, pkg, bwr );

/**
 * Default task when running 'gulp' command line
 */
gulp.task( 'default', [ 'watch' ] );

/**
 * Run watchers on scss, vendors and config files
 */
gulp.task( 'watch', function () {

        plugins.runSequence(
            [
                'clean-all'
            ],
            [
                'cp-base',
                'sass',
                'vendorjs',
                'build-modernizr',
                'imagemin',
                'javascript'
            ]
        );

        gulp.watch( config.srcPath + '/' + config.cssDir + '/**/*.scss', [ 'sass' ] );

        gulp.watch( config.bowerDir + '/**/*.js', [ 'vendorjs' ] );

        gulp.watch( config.srcPath + '/' + config.jsDir + '/**/*.js', [ 'javascript' ] );

        gulp.watch( './config.json', [ 'reload-config' ] );

        var baseFiles = [];
        for ( var i = 0, l = config.basesiteList.length; i < l; i++ ) {
            baseFiles.push( config.srcPath + '/' + config.basesiteList[ i ] );
        }
        gulp.watch( baseFiles, [ 'clean-base', 'cp-base' ] );

        gulp.watch( './modernizr-config.json', [ 'reload-modernizr-options' ] );
    }, {
        aliases: [ 'dev' ]
    }
);

