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
        hideDepsMessage: true,
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
                'gulp-jshint': 'gulpJSHint',
                'vinyl-ftp': 'ftp',
                'bowboosh-tools': 'tools'
            },
            lazy: true
        }
    );

// TODO : create an independant npm module
// plugins.tools = require( './custom_modules/tools/index' );
// plugins.tools.init( gulp, config, pkg, bwr );

// Require all tasks
plugins.loadSubtasks( './gulp-tasks/**/*.js', plugins, config, pkg, bwr );

/**
 * Default task when running 'gulp' command line
 */
gulp.task( 'default', 'Default task: run watchers', [ 'watch' ] );


/**
 * Run watchers on scss, vendors and config files
 */
gulp.task( 'watch', function () {

        plugins.runSequence(
            [
                'clean-app'
            ],
            [
                'watch-base',
                'watch-sass',
                'watch-vendors',
                'watch-modernizr',
                'watch-imagemin',
                'watch-javascript',
                'watch-umd'
            ]
        );

        gulp.watch( './config.json', [ 'reload-config' ] );

    }, {
        aliases: [ 'dev' ]
    }
);