'use strict';
/**
 * A special module.
 * @module app/special/special-two
 */
define( 'app/special/special-two', [
        'jquery',
        'app/helpers'
    ], function ( $, Helpers ) {

        /**
         * @constructor
         * @alias module:app/special/special-two
         */
        function SpecialOne() {
            console.log( 'Hello SpecialOne' );
            this.uid = Helpers.guid();
            this.$el = null;
        }

        SpecialOne.prototype = {
            /**
             * Initialize the special module, give it a uid
             * @returns {SpecialOne}
             */
            init: function () {
                console.log( 'SpecialOne.init' );
                this.uid = Helpers.guid();
                return (this);
            }
        };

        /**
         * Return the constructor.
         */
        return ( SpecialOne );
    }
);