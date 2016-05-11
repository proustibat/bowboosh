"use strict";

/**
 * Configuration files
 */
var config = require( './config.json' ),
    pkg = require( './package.json' ),
    bwr = require( './bower.json' );

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
    plugins  = require('gulp-load-plugins')({
        scope: ['devDependencies'],
        pattern: '*',
        rename: {
            'main-bower-files': 'mainBowerFiles'
        },
        lazy: true
    });


// Require all tasks
plugins.loadSubtasks( './gulp-tasks/**/*.js', plugins, config, pkg, bwr );


/**
 * Default task when running 'gulp' command mine
 */
gulp.task( 'default', [ 'sass', 'vendorjs' ], function () {
        gulp.watch( config.srcPath + '/' + config.cssDir + '/**/*.scss', [ 'sass' ] );
        gulp.watch( config.bowerDir + '/**/*.js', [ 'vendorjs' ] );
    }
);