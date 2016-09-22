/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmRlZmluZSggJ21haW4nLCBbXG4gICAgICAgICdqcXVlcnknLFxuICAgICAgICAnYXBwL2hlbHBlcnMnLFxuICAgICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICAgJ2FwcC9jbGlja21lbW9kdWxlJ1xuICAgIF0sIGZ1bmN0aW9uICggJCwgSGVscGVycywgQm9vdHN0cmFwLCBDbGlja01lTW9kdWxlICkge1xuICAgICAgICBjb25zb2xlLmxvZyggJ0hlbGxvIFJlcXVpcmUgSlMgQm9vd2Jvb3NoIEFwcCcgKTtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXYXJuaW5nIGFkdmlzaW5nIHRoZSB1c2VyIHRvIHVwZGF0ZSB0aGUgYnJvd3Nlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlcXVpcmUoIFsgJ291dGRhdGVkYnJvd3NlcicgXSwgZnVuY3Rpb24gKCBvdXRkYXRlZEJyb3dzZXIgKSB7XG4gICAgICAgICAgICAgICAgb3V0ZGF0ZWRCcm93c2VyKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yOiAnI2YyNTY0OCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJUaGFuOiAnYm9yZGVySW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIklFMTFcIixcImJvcmRlckltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIklFMTBcIiwgXCJ0cmFuc2Zvcm1cIiAoRGVmYXVsdCBwcm9wZXJ0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICBcIklFOVwiLCBcImJveFNoYWRvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJJRThcIiwgXCJib3JkZXJTcGFjaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VQYXRoOiAnb3V0ZGF0ZWRicm93c2VyL2xhbmcvZW4uaHRtbCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuXG4gICAgICAgIHZhciBfc3BlY2lhbE1vZHVsZSA9IG51bGw7XG5cbiAgICAgICAgdmFyIGNvbG9ycyA9IFtcbiAgICAgICAgICAgICdjb2xvci1mYXYtZ3JlZW4tYmx1ZScsXG4gICAgICAgICAgICAnY29sb3ItZmF2LXllbGxvdycsXG4gICAgICAgICAgICAnY29sb3ItZmF2LXBpbmsnLFxuICAgICAgICAgICAgJ2NvbG9yLWZhdi1yZWQtb3JhbmdlJyxcbiAgICAgICAgICAgICdjb2xvci1mYXYtZ3JlZW4nLFxuICAgICAgICAgICAgJ2NvbG9yLWZhdi10dXJxdW9pc2UnLFxuICAgICAgICAgICAgJ2NvbG9yLWZhdi1ibHVlJyxcbiAgICAgICAgICAgICdjb2xvci1mYXYtb3JhbmdlJyxcbiAgICAgICAgICAgICdjb2xvci1mYXYtdmlvbGV0J1xuICAgICAgICBdO1xuXG4gICAgICAgIC8vIEluc3RhbmNpYXRpb24gJiBpbml0aWFsaXphdGlvbiBvZiBlYWNoIG1vZHVsZVxuICAgICAgICBmb3IgKCB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICB1c2VkQ29sb3IgPSAwLFxuICAgICAgICAgICAgICAgICAgbmJNb2R1bGVzID0gJCggJy5qcy1tb2R1bGVzIC5qcy1tb2R1bGUnICkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgbW9kdWxlTGlzdCA9IFtdO1xuICAgICAgICAgICAgICBpIDwgbmJNb2R1bGVzO1xuICAgICAgICAgICAgICBpKysgKSB7XG4gICAgICAgICAgICBtb2R1bGVMaXN0LnB1c2goIG5ldyBDbGlja01lTW9kdWxlKCAkKCAnLmpzLW1vZHVsZXMgLmpzLW1vZHVsZScgKS5lcSggaSApLCBjb2xvcnNbIHVzZWRDb2xvciBdICkgKTtcbiAgICAgICAgICAgIHVzZWRDb2xvciA9IHVzZWRDb2xvciA9PT0gY29sb3JzLmxlbmd0aCAtIDEgPyAwIDogdXNlZENvbG9yICsgMTtcbiAgICAgICAgICAgIG1vZHVsZUxpc3QucG9wKCkuaW5pdCgpO1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgICQoICcuanMtY3JlYXRlLWJ1dHRvbicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImNyZWF0ZSBcIiwgX3NwZWNpYWxNb2R1bGUgKTtcbiAgICAgICAgICAgICAgICAkKCB0aGlzICkuYnV0dG9uKCAnbG9hZGluZycgKTtcbiAgICAgICAgICAgICAgICAvLyBMb2FkIHRoaXMgZmlsZSBhbmQgaXRzIGRlcGVuZGVuY2llcyB3aGVuIG5lZWRlZFxuICAgICAgICAgICAgICAgIHJlcXVpcmUoIFsgJ2FwcC9zcGVjaWFsbW9kdWxlJyBdLCBmdW5jdGlvbiAoIFNwZWNpYWxNb2R1bGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIF9zcGVjaWFsTW9kdWxlID09PSBudWxsICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zcGVjaWFsTW9kdWxlID0gbmV3IFNwZWNpYWxNb2R1bGUoICQoIHRoaXMgKS5wYXJlbnRzKCAnLnJvdycgKSApLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3BlY2lhbE1vZHVsZS5zYXlIZWxsbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoIHRoaXMgKS5hdHRyKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGlzYWJsZWQnOiAnZGlzYWJsZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtcHJlc3NlZCc6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkuYWRkQ2xhc3MoICdkaXNhYmxlZCcgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKS50ZXh0KCAnZG9uZScgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCBcIlNwZWNpYWwgTW9kdWxlIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCFcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQoIHRoaXMgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuKTsiXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
