"use strict";

/**
 * Configuration files
 */
var config = require( './config.json' ),
    pkg = require( './package.json' ),
    bwr = require( './bower.json' );
config.env = {};

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
                'bowboosh-tools': 'tools',
                'gulp-if': 'gulpif'
            },
            lazy: true
        }
    );

// Require all tasks
plugins.loadSubtasks( './gulp-tasks/**/*.js', plugins, config, pkg, bwr );

// Bowboosh-tolls init
plugins.tools.init( gulp, config, pkg, bwr );

/**
 * Default task when running 'gulp' command line
 */
gulp.task( 'default', 'Default task: run watchers', [ 'watch' ] );


/**
 * Run watchers on all web app or site sources
 */
gulp.task( 'watch', 'Run watchers on all web app or site sources', function () {
        config.env.dev = true;
        config.env.prod = false;
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
            ],
            [
                'jshint'
            ]
        );
        gulp.watch( './config.json', [ 'reload-config' ] );
    }, {
        aliases: [ 'dev' ]
    }
);

/**
 * Build web app or site for distribution
 */
gulp.task( 'build', 'Build web app or site for distribution', function () {
        config.env.dev = false;
        config.env.prod = true;
        plugins.runSequence(
            [
                'clean-app'
            ],
            [
                'copy-base',
                'build-sass',
                'build-vendors',
                'build-modernizr',
                'build-imagemin',
                'build-javascript',
                'build-umd'
            ]
        );
    }, {
        aliases: [ 'prod' ]
    }
);