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
                'through2': 'through',
                'vinyl-source-stream': 'source',
                'vinyl-buffer': 'vinylBuffer',
                'event-stream': 'es'

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
                'clean-base',
                'clean-vendor',
                'clean-modernizr',
                'clean-theme-css',
                'clean-css'
            ],
            [
                'cp-base',
                'sass',
                'vendorjs',
                'build-modernizr'
            ]
        );

        gulp.watch( config.srcPath + '/' + config.cssDir + '/**/*.scss', [ 'sass' ] );
        gulp.watch( config.bowerDir + '/**/*.js', [ 'vendorjs' ] );

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

/**
 * Re-load config file
 */
gulp.task( 'reload-config', 'Require new config after changes on config.json', function () {
        delete require.cache[ require.resolve( './config.json' ) ];
        config = require( './config.json' );
        config.modernizrOptions = modernizrOptions;
        console.log( config.bootstrapTheme );
        // gulp.start( [ 'clean-base', 'reload-modernizr-options', 'cp-base', 'sass', 'vendorjs' ] );
        plugins.runSequence(
            [
                'clean-base',
                'clean-vendor',
                'clean-theme-css',
                'clean-css'
            ],
            [
                'cp-base',
                'sass',
                'vendorjs'
            ],
            [
                'reload-modernizr-options'
            ]
        );
    }
);

/**
 * Re-load modernizr options file
 */
gulp.task( 'reload-modernizr-options', 'Require new modernizr options after changes on modernizr.config.json', function () {
        delete require.cache[ require.resolve( './modernizr-config.json' ) ];
        modernizrOptions = require( './modernizr-config.json' );
        config.modernizrOptions = modernizrOptions;
        plugins.runSequence( 'clean-modernizr', 'build-modernizr' );
    }
);
