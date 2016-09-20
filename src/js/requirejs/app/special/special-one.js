'use strict';
define( 'app/special/special-one', [
        'jquery',
        'app/helpers'
    ], function ( $, Helpers ) {

        /**
         * SpecialOne constructor
         */
        return function () {
            console.log( 'Hello SpecialOne' );

            /**
             * SpecialOne prototype
             */
            return {

                uid: null,
                $el: null,

                /**
                 *
                 */
                init: function () {
                    console.log( 'SpecialOne.init' );
                    this.uid = Helpers.guid();
                    return (this);
                }


            };

        };

    }
);