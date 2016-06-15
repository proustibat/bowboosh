'use strict';
/*--------------------------------------------------------------------------
 *
 * MODULE EXAMPLE
 *
 ---------------------------------------------------------------------------*/
var MODULE = window.MODULE || (function ( document, window, undefined ) {
        // Public
        return {
            init: function () {
                console.log( 'Hello Module', this );
                _privateMethod1();
                _privateMethod2();
            },

            publicMethod: function () {
                console.log( 'Module :: publicMethod' );
            }
        };

        // Private
        function _privateMethod1() {
            console.log( 'Module :: Private method 1' );
        }

        function _privateMethod2() {
            console.log( 'Module :: Private method 2' );
        }

    })( document, window );


MODULE.init();
MODULE.publicMethod();

