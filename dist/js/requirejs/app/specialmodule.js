/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
'use strict';
define( 'app/specialmodule',
    [
        'jquery',
        'app/helpers',
        'app/special/special-one',
        'app/special/special-two'
    ],
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
            init: function () {
                console.log( 'SpecialModule.init' );
                this.$info = $( '<span class="text-context">' );
                this.$el.find('.js-create-button').after( this.$info );
                return (this);
            },

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAvc3BlY2lhbG1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5kZWZpbmUoICdhcHAvc3BlY2lhbG1vZHVsZScsXG4gICAgW1xuICAgICAgICAnanF1ZXJ5JyxcbiAgICAgICAgJ2FwcC9oZWxwZXJzJyxcbiAgICAgICAgJ2FwcC9zcGVjaWFsL3NwZWNpYWwtb25lJyxcbiAgICAgICAgJ2FwcC9zcGVjaWFsL3NwZWNpYWwtdHdvJ1xuICAgIF0sXG4gICAgZnVuY3Rpb24gKCAkLCBIZWxwZXJzLCBTcGVjaWFsT25lICkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIFNwZWNpYWxNb2R1bGUoICRlbCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnSGVsbG8gU3BlY2lhbE1vZHVsZSAnICk7XG4gICAgICAgICAgICB0aGlzLnVpZCA9IEhlbHBlcnMuZ3VpZCgpO1xuICAgICAgICAgICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3tpbml0OiBTcGVjaWFsTW9kdWxlLmluaXQsIHNheUhlbGxvOiBTcGVjaWFsTW9kdWxlLnNheUhlbGxvfX1cbiAgICAgICAgICovXG4gICAgICAgIFNwZWNpYWxNb2R1bGUucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnU3BlY2lhbE1vZHVsZS5pbml0JyApO1xuICAgICAgICAgICAgICAgIHRoaXMuJGluZm8gPSAkKCAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWNvbnRleHRcIj4nICk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWwuZmluZCgnLmpzLWNyZWF0ZS1idXR0b24nKS5hZnRlciggdGhpcy4kaW5mbyApO1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzYXlIZWxsbzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnU3BlY2lhbE1vZHVsZS5zYXlIZWxsbycgKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRpbmZvLmFkZENsYXNzKCAnYmctc3VjY2VzcycgKS5odG1sKCAnSGVsbG8gU3BlY2lhbCBNb2R1bGUnICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJldHVybiB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgIHJldHVybiAoIFNwZWNpYWxNb2R1bGUgKTtcblxuICAgIH1cbik7Il0sImZpbGUiOiJhcHAvc3BlY2lhbG1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
