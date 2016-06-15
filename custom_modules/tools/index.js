'use strict';

var chokidar = require( 'chokidar' );
var gutil = require( 'gulp-util' );

module.exports = {

    config: null,
    pkg: null,
    bwr: null,
    gulp: null,

    /**
     * Banner package
     * @type {Array}
     */
    banner: [ '/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version v<%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' */',
        '' ].join( '\n' ),

    init: function ( gulp, config, pkg, bwr ) {
        console.log( "Tools.init" );
        this.gulp = gulp;
        this.config = config || {};
        this.pkg = config || {};
        this.bwr = config || {};
    },

    /**
     * Watch function with chokidar plugin
     * @param {Array} files
     * @param {Array} tasks
     */
    spy: function ( files, tasks, callback ) {
        console.log( "Tools.spy" );
        chokidar.watch( files, {
                ignoreInitial: true,
                // awaitWriteFinish: true,
                ignorePermissionErrors: true
            }
        ).on( 'all', function ( event, path ) {
                // console.log( event, path );
                this.gulp.start( tasks );
            }.bind( this )
        ).on( 'error', function ( error ) {
                // plugins.throwError( 'plugins.spy', error.message, true );
                console.log( "error" );
            }.bind( this )
        );
    },

    /**
     * Write a file
     * @param filename
     * @param string
     * @returns {*}
     */
    stringSrc: function ( filename, string ) {
        var src = require( 'stream' ).Readable( { objectMode: true } );
        src._read = function () {
            this.push( new gutil.File( { cwd: "", base: "", path: filename, contents: new Buffer( string ) } ) )
            this.push( null )
        };
        return src;
    }

};
