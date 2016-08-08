'use strict';
define( 'app/helpers', [
        'jquery'
    ], function ( $ ) {

        return {

            guid: function () {
                return Math.floor( (1 + Math.random()) * 0x10000 )
                    .toString( 16 )
                    .substring( 1 );
            }

        };
    }
);