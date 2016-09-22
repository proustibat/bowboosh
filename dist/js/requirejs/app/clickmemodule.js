/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAvY2xpY2ttZW1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5kZWZpbmUoICdhcHAvY2xpY2ttZW1vZHVsZScsIFtcbiAgICAgICAgJ2pxdWVyeScsXG4gICAgICAgICdhcHAvaGVscGVycydcbiAgICBdLCBmdW5jdGlvbiAoICQsIEhlbHBlcnMgKSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICggJGVsZW1lbnQsIGNzc0NsYXNzICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coICdIZWxsbyBDbGlja01lTW9kdWxlJyApO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICAgICAgdWlkOiBudWxsLFxuICAgICAgICAgICAgICAgICRlbDogbnVsbCxcbiAgICAgICAgICAgICAgICAkYm94OiBudWxsLFxuICAgICAgICAgICAgICAgICRidXR0b246IG51bGwsXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnQ2xpY2tNZU1vZHVsZS5pbml0JyApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpZCA9IEhlbHBlcnMuZ3VpZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbCA9ICRlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRib3ggPSB0aGlzLiRlbC5maW5kKCAnLm1vZC1yanMtYm94JyApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRib3guYWRkQ2xhc3MoIGNzc0NsYXNzICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsLmRhdGEoICd1aWQnLCB0aGlzLnVpZCApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbC5maW5kKCAnLmpzLW1vZHVsZS10aXRsZScgKS5odG1sKCAnTW9kdWxlICcgKyB0aGlzLnVpZCApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRidXR0b24gPSB0aGlzLiRlbC5maW5kKCAnLmpzLWJ1dHRvbicgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgc2V0TGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnQ2xpY2tNZU1vZHVsZS5zZXRMaXN0ZW5lcnMnICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGJ1dHRvbi5vbiggJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQoIHRoaXMgKSApO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW0gZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIG9uQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uICggZSApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdDbGlja01lTW9kdWxlLm9uQnV0dG9uQ2xpY2sgOiAnLCB0aGlzLnVpZCApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRidXR0b24uYnV0dG9uKCAnbG9hZGluZycgKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsLnRvZ2dsZUNsYXNzKCAnYWN0aXZlJyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9ICh0aGlzLiRidXR0b24uYXR0ciggXCJhcmlhLXByZXNzZWRcIiApID09PSAndHJ1ZScgPyAndW5jbGljaycgOiAnY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdGhpcy4kYnV0dG9uLmF0dHIoIFwiYXJpYS1wcmVzc2VkXCIgKSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBzdGF0ZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGJ1dHRvbi5idXR0b24oIHN0YXRlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy4kYnV0dG9uLmJ1dHRvbiggJ3Jlc2V0JyApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQoIHRoaXMgKSwgSGVscGVycy5nZXRSYW5kb21JbnQoIDAsIDE1MDAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9O1xuXG4gICAgfVxuKTsiXSwiZmlsZSI6ImFwcC9jbGlja21lbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
