'use strict';
/**
 * A test module ClassicalApp
 * @version 1.0
 * @exports bowboosh/classical
 * @namespace classical
 */
var ClassicalApp = {

    /**
     * Main container
     * @memberof classical
     * @type {object}
     */
    el: null,

    /**
     * Button element
     * @memberof classical
     * @type {object}
     */
    button: null,

    /**
     * Get main container and button elements
     * @memberof classical
     * @method init
     */
    init: function () {
        console.log( "ClassicalApp.init" );
        this.el = document.body.getElementsByClassName( 'js-jumbotron-container' )[ 1 ];
        this.button = this.el.getElementsByClassName( 'js-btn-click-me' );
        this.setListeners();
    },

    /**
     * Add events listeners
     * @memberof classical
     * @method setListeners
     */
    setListeners: function () {
        this.el.addEventListener('click', this.onClickButton, false);
    },

    /**
     * The button on the main element has been clicked
     * @memberof classical
     * @method onClickButton
     * @param e {event}
     */
    onClickButton: function ( e ) {
        e.preventDefault();
        alert( 'Clicked' );
    }
};

ClassicalApp.init();
