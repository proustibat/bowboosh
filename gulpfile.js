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
                'gulp-if': 'gulpif',
                'gulp-header-license': 'license'
            },
            lazy: true
        }
    );


// Require all tasks
plugins.loadSubtasks( './gulp-tasks/**/*.js', plugins, config, pkg, bwr );

// Uglify options
var uglifyOptions = {
    output: {
        beautify: false,
        comments: false

    },
    compress: {
        drop_console: true,
        warnings: false
    },
    drop_console: true,
    preserveComments: false,
    mangle: true,
    outSourceMap: false
};

plugins.uglifyOptions = uglifyOptions;


// Bowboosh-tools init
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
                'watch-base-src',
                'watch-sass',
                'watch-vendors',
                'watch-modernizr',
                'watch-imagemin',
                'watch-js-smp',
                'watch-js-umd',
                'watch-js-classical',
                'watch-js-classical-bis'
            ],
            [
                'jshint'
            ]
        );
        gulp.watch( './config.json', [ 'reload-config' ] );
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
                'copy-base-src',
                'build-sass',
                'build-vendors',
                'build-modernizr',
                'build-imagemin',
                'build-js-smp',
                'build-js-umd',
                'build-js-classical',
                'build-js-classical-bis'
            ]
        );
    }
);