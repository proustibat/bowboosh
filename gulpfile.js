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
                'merge-stream': 'merge'
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

/**
 * Error Handling
 * @param taskName
 * @param msg
 */
function throwError( taskName, msg, forceOnError ) {

    plugins.util.beep();

    if ( !forceOnError ) {
        throw new plugins.util.PluginError( {
                plugin: taskName.toString(),
                message: msg.toString()
            }
        );
    }
    else {
        plugins.util.log( plugins.util.colors.bgRed.inverse.bold( taskName.toString() + ' | ' + msg ) );
    }
    gulp.emit( 'end' );
}
plugins.throwError = throwError;

/**
 * Handle errors in underlying streams and output them to console.
 * @param err
 */
function errorHandler( err ) {
    plugins.util.log( plugins.util.colors.bgRed.inverse.bold( '| ERROR-HANDLER |' + err.message ) );
    this.emit( 'end' );
}
plugins.errorHandler = errorHandler;


/**
 * Write a file
 * @param filename
 * @param string
 * @returns {*}
 */
function stringSrc( filename, string ) {
    var src = require( 'stream' ).Readable( { objectMode: true } )
    src._read = function () {
        this.push( new plugins.util.File( { cwd: "", base: "", path: filename, contents: new Buffer( string ) } ) )
        this.push( null )
    };
    return src;
}
plugins.stringSrc = stringSrc;


/**
 * Watch function with chokidar plugin
 * @param {Array} files
 * @param {Array} tasks
 */
function spy( files, tasks, callback ) {
    plugins.chokidar.watch( files, {
            ignoreInitial: true,
            // awaitWriteFinish: true,
            ignorePermissionErrors: true
        }
    ).on( 'all', function ( event, path ) {
            // console.log( event, path );
            gulp.start( tasks );
        }
    ).on( 'error', function ( error ) {
            plugins.throwError( 'plugins.spy', error.message, true );
        }
    );
}
plugins.spy = spy;

/**
 * Banner package
 * @type {Array}
 */
plugins.banner = [ '/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    '' ].join( '\n' );



