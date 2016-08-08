'use strict';
// Require.js allows us to configure shortcut alias
require.config( {
        baseUrl: 'js/vendor',
        paths: {
            jquery: 'jquery/dist/jquery.min',
            bootstrap: "bootstrap-sass/assets/javascripts/bootstrap.min"
        },
        shim: {
            'bootstrap': {
                deps: [ 'jquery' ]
            }
        }
    }
);

require( [
        'jquery',
        'bootstrap',
        'app/clickmemodule'
    ], function ( $, Bootstrap, ClickMeModule ) {

        // DOM ready
        $( function () {
                console.log( 'Hello Require JS App' );

                var colors = [
                    'color-fav-green-blue',
                    'color-fav-yellow',
                    'color-fav-pink',
                    'color-fav-red-orange',
                    'color-fav-green',
                    'color-fav-turquoise',
                    'color-fav-blue',
                    'color-fav-orange',
                    'color-fav-violet'
                ];
                var usedColor = 0;

                var nbModules = $( '.js-modules .js-module' ).length;
                var moduleList = [];
                // Instanciation
                for ( var i = 0, l = nbModules; i < l; i++ ) {
                    moduleList.push( new ClickMeModule( $( '.js-modules .js-module' ).eq( i ), colors[ usedColor ] ) );
                    usedColor++;
                    if ( usedColor === colors.length ) {
                        usedColor = 0;
                    }
                }
                // Initilization
                for ( i = 0; i < l; i++ ) {
                    moduleList[ i ].init();
                }

            }
        );
    }
);