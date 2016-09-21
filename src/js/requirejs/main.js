'use strict';
define( 'main', [
        'jquery',
        'app/helpers',
        'bootstrap',
        'app/clickmemodule'
        // 'app/specialmodule'
    ], function ( $, Helpers, Bootstrap, ClickMeModule, SpecialModule ) {
        console.log( 'Hello Require JS Boowboosh App' );

        var _specialModule = null;

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

        // Instanciation & initialization of each module
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


        $( '.js-create-button' ).on( 'click', function () {
                console.log( "create ", _specialModule );
                $( this ).button( 'loading' );

                setTimeout( function () {
                        // Load this file and its dependencies when needed
                        require( [ 'app/specialmodule' ], function ( SpecialModule ) {
                                if ( _specialModule === null ) {
                                    _specialModule = new SpecialModule( $( this ).parents( '.row' ) ).init();
                                    _specialModule.sayHello();
                                    $( this ).attr( {
                                            'disabled': 'disabled',
                                            'aria-pressed': true
                                        }
                                    ).addClass( 'disabled' ).removeClass( 'active' ).text( 'done' );
                                }
                                else {
                                    alert( "Special Module has already been created!" );
                                }
                            }.bind( this )
                        );
                    }.bind( this ), Helpers.getRandomInt( 0, 1500 )
                );


            }
        );
    }
);