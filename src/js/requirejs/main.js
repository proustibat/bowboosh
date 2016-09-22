'use strict';
define( 'main', [
        'jquery',
        'app/helpers',
        'bootstrap',
        'app/clickmemodule'
    ], function ( $, Helpers, Bootstrap, ClickMeModule ) {
        console.log( 'Hello Require JS Boowboosh App' );


        /**
         * Warning advising the user to update the browser.
         */
        require( [ 'outdatedbrowser' ], function ( outdatedBrowser ) {
                outdatedBrowser( {
                        bgColor: '#f25648',
                        color: '#ffffff',
                        lowerThan: 'borderImage',
                        /*
                         "IE11","borderImage"
                         "IE10", "transform" (Default property)
                         "IE9", "boxShadow"
                         "IE8", "borderSpacing"
                         */
                        languagePath: 'outdatedbrowser/lang/en.html'
                    }
                );

            }
        );


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
            }
        );
    }
);