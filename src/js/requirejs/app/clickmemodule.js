'use strict';
define( 'app/clickmemodule', [
        'jquery',
        'app/helpers'
    ], function ( $, Helpers ) {

        return function ( $element, cssClass ) {
            console.log( 'Hello ClickMeModule' );

            return {

                uid: null,
                $el: null,
                $box: null,
                $button: null,

                /**
                 * 
                 */
                init: function () {
                    console.log( 'ClickMeModule.init' );
                    this.uid = Helpers.guid();
                    this.$el = $element;
                    this.$box = this.$el.find( '.mod-rjs-box' );
                    this.$box.addClass( cssClass );
                    this.$el.data( 'uid', this.uid );
                    this.$el.find( '.js-module-title' ).html( 'Module ' + this.uid );
                    this.$button = this.$el.find( '.js-button' );
                    this.setListeners();
                },

                /**
                 * 
                 */
                setListeners: function () {
                    console.log( 'ClickMeModule.setListeners' );
                    this.$button.on( 'click', this.onButtonClick.bind( this ) );
                },

                /**
                 * 
                 * @param e
                 */
                onButtonClick: function ( e ) {
                    console.log( 'ClickMeModule.onButtonClick : ', this.uid );
                    this.$button.button( 'loading' );
                    setTimeout( function () {
                            this.$el.toggleClass( 'active' );
                            var state = (this.$button.attr( "aria-pressed" ) === 'true' ? 'unclick' : 'click');
                            console.log( this.$button.attr( "aria-pressed" ) );
                            console.log( state );
                            // debugger;
                            this.$button.button( state );
                            // this.$button.button( 'reset' );

                        }.bind( this ), Helpers.getRandomInt( 0, 1500 )
                    );
                    e.preventDefault();
                }
            };

        };

    }
);