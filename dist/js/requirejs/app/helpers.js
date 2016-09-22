/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAvaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5kZWZpbmUoICdhcHAvaGVscGVycycsIFtcbiAgICAgICAgJ2pxdWVyeSdcbiAgICBdLCBmdW5jdGlvbiAoICQgKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgZ3VpZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCAoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCApXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZyggMTYgKVxuICAgICAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKCAxICk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybiBhIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIGEgbWluIHZhbHVlIGluY2x1c2l2ZSBhbmQgYSBtYXggdmFsdWUgZXhjbHVzaXZlXG4gICAgICAgICAgICAgKiBAcGFyYW0gbWluXG4gICAgICAgICAgICAgKiBAcGFyYW0gbWF4XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0UmFuZG9tSW50OiBmdW5jdGlvbiAoIG1pbiwgbWF4ICkge1xuICAgICAgICAgICAgICAgIG1pbiA9IE1hdGguY2VpbCggbWluICk7XG4gICAgICAgICAgICAgICAgbWF4ID0gTWF0aC5mbG9vciggbWF4ICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApICsgbWluO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbik7Il0sImZpbGUiOiJhcHAvaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
