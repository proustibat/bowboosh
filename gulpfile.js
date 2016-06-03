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
    plugins = require( 'gulp-load-plugins' )( {
            scope: [ 'devDependencies' ],
            pattern: '*',
            rename: {
                'main-bower-files': 'mainBowerFiles',
                'argv': 'yargs'
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
gulp.task( 'watch', [ 'cp-base', 'sass', 'vendorjs' ], function () {
        gulp.watch( config.srcPath + '/' + config.cssDir + '/**/*.scss', [ 'sass' ] );
        gulp.watch( config.bowerDir + '/**/*.js', [ 'vendorjs' ] );
        gulp.watch( './config.json', [ 'reload-config', 'sass', 'vendorjs' ] );

        var baseFiles = [];
        for ( var i = 0, l = config.basesiteList.length; i < l; i++ ) {
            baseFiles.push( config.srcPath + '/' + config.basesiteList[ i ] );
        }
        gulp.watch( baseFiles, [ 'cp-base' ] );
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
        console.log( config.bootstrapTheme );
        gulp.start( [ 'cp-base', 'sass', 'vendorjs' ] );
    }
);

gulp.task( 'modernizr', function () {
        gulp.src( './js/*.js' )
            .pipe( plugins.modernizr() )
            .pipe( gulp.dest( "build/" ) )
    }
);


