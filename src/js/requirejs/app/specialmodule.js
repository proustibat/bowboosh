'use strict';
/**
 * 
 */
define( 'app/specialmodule',
    [
        'jquery',
        'app/helpers',
        'app/special/special-one',
        'app/special/special-two'
    ],
    /**
     * 
     * @param $
     * @param Helpers
     * @param SpecialOne
     * @returns {SpecialModule}
     */
    function ( $, Helpers, SpecialOne ) {

        /**
         *
         * @constructor
         */
        function SpecialModule( $el ) {
            console.log( 'Hello SpecialModule ' );
            this.uid = Helpers.guid();
            this.$el = $el;
        }

        /**
         *
         * @type {{init: SpecialModule.init, sayHello: SpecialModule.sayHello}}
         */
        SpecialModule.prototype = {
            /**
             * 
             * @returns {SpecialModule}
             */
            init: function () {
                console.log( 'SpecialModule.init' );
                this.$info = $( '<span class="text-context">' );
                this.$el.find('.js-create-button').after( this.$info );
                return (this);
            },

            /**
             * 
             * @returns {SpecialModule}
             */
            sayHello: function () {
                console.log( 'SpecialModule.sayHello' );
                this.$info.addClass( 'bg-success' ).html( 'Hello Special Module' );
                return (this);
            }

        };

        // Return the constructor.
        return ( SpecialModule );

    }
);