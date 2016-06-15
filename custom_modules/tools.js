'use strict';

// var chokidar = require( '' );
// var gutil = require('../node_modules/gulp-util');

module.exports = {

    config: null,
    pkg: null,
    bwr: null,

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

    init: function ( config, pkg, bwr ) {
        console.log("Tools.init");
        this.config = config || {};
        this.pkg = config || {};
        this.bwr = config || {};
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
