'use strict';
define( 'app/helpers', [
        'jquery'
    ], function ( $ ) {

        return {

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
                return Math.floor( Math.random() * (max - min) ) + min;
            }
        };
    }
);