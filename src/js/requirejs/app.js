'use strict';
define( 'App', [
        'jquery',
        'bootstrap',
        'app/clickmemodule'
    ], function ( $, Bootstrap, ClickMeModule ) {
        console.log( 'Hello Require JS Boowboosh App' );
        // return function () {

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

        // Instanciation & initialization each module
        for ( var i = 0,
                  usedColor = 0,
                  nbModules = $( '.js-modules .js-module' ).length,
                  moduleList = [];
              i < nbModules;
              i++ ) {
            moduleList.push( new ClickMeModule( $( '.js-modules .js-module' ).eq( i ), colors[ usedColor ] ) );
            usedColor = usedColor === colors.length - 1 ? 0 : usedColor + 1;
            moduleList.pop().init();

        }
        // };
    }
);