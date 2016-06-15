'use strict';

var chokidar = require( 'chokidar' );

// var gutil = require('../node_modules/gulp-util');

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
            }.bind(this)
        ).on( 'error', function ( error ) {
                // plugins.throwError( 'plugins.spy', error.message, true );
                console.log( "error" );
            }.bind(this)
        );
    }

    //
    // ,
    //
    // errorHandler: function ( err ) {
    //     gutil.log( plugins.util.colors.bgRed.inverse.bold( '| ERROR-HANDLER |' + err.message ) );
    //     this.emit( 'end' );
    // }

    // spy: function ( files, tasks, callback ) {
    //     plugins.chokidar.watch( files, {
    //             ignoreInitial: true,
    //             // awaitWriteFinish: true,
    //             ignorePermissionErrors: true
    //         }
    //     ).on( 'all', function ( event, path ) {
    //             // console.log( event, path );
    //             gulp.start( tasks );
    //         }
    //     ).on( 'error', function ( error ) {
    //             plugins.throwError( 'plugins.spy', error.message, true );
    //         }
    //     );
    // }

};
