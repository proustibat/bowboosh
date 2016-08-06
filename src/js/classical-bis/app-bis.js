'use strict';
(function(window, undefined) {

    var classical = window.classical = window.classical || {};
    /**
     * A test module ClassicalApp
     * @version 1.0
     * @module
     */
    classical.app = (function(/** @lends app.prototype */) {

        var app = {};
        /**
         * Main container
         */
        app.el = null;
        /**
         * Button element
         * @type {object}
         */
        app.button = null;
        /**
         * Add events listeners
         * @method setListeners
         */
        app.setListeners = function() {
            this.el.addEventListener('click', this.onClickButton, true);
        };
        /**
         * The button on the main element has been clicked
         * @method onClickButton
         * @param e {event}
         */
        app.onClickButton = function ( e ) {
            e.preventDefault();
            alert( 'Clicked bis' );
        };
        /**
         * Get main container and button elements
         * @method init
         */
        app.init = function() {
            this.el = document.body.getElementsByClassName( 'js-jumbotron-container' )[ 2 ];
            this.button = this.el.getElementsByClassName( 'js-btn-click-me' );

            this.setListeners();
        };

        return app;
    })();


    classical.app.init();

})(window);
