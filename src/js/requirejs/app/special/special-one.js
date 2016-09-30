'use strict';
/**
 * Another special module.
 * @module app/special/special-one
 */
define( 'app/special/special-one', [
        'jquery',
        'app/helpers'
    ], function ( $, Helpers ) {

        /**
         * @constructor
         * @alias module:app/special/special-one
         */
        return function () {
            console.log( 'Hello SpecialOne' );
            return {

                /**
                 *
                 */
                uid: null,
                /**
                 *
                 */
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