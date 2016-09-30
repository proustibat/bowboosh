'use strict';
/**
 * Module for helpers functions.
 * @module app/helpers
 */
define( 'app/helpers', [
        'jquery'
    ],
    function ( $ ) {
        return /** @alias module:app/helpers */{

            /**
             * Return a random unique identifier number
             * @returns {string}
             */
            guid: function () {
                return Math.floor( (1 + Math.random()) * 0x10000 )
                    .toString( 16 )
                    .substring( 1 );
            },

            /**
             * Return a random value between a min value inclusive and a max value exclusive
             * @param min
             * @param max
             * @returns {*}
             */
            getRandomInt: function ( min, max ) {
                min = Math.ceil( min );
                max = Math.floor( max );
                var random = Math.random() * (max - min);
                return Math.floor( random ) + min;
            }
        };
    }
);