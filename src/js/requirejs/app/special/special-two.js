'use strict';
define( 'app/special/special-two', [
        'jquery',
        'app/helpers'
    ], function ( $, Helpers ) {

        /**
         *
         * @constructor
         */
        function SpecialOne() {
            console.log( 'Hello SpecialOne' );
            this.uid = Helpers.guid();
            this.$el = null;
        }

        /**
         *
         * @type {{init: SpecialModule.init, sayHello: SpecialModule.sayHello}}
         */
        SpecialOne.prototype = {
            init: function () {
                console.log( 'SpecialOne.init' );
                this.uid = Helpers.guid();
                return (this);
            }
        };

        // Return the constructor.
        return ( SpecialOne );

    }
);