/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAvc3BlY2lhbC9zcGVjaWFsLXR3by5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5kZWZpbmUoICdhcHAvc3BlY2lhbC9zcGVjaWFsLXR3bycsIFtcbiAgICAgICAgJ2pxdWVyeScsXG4gICAgICAgICdhcHAvaGVscGVycydcbiAgICBdLCBmdW5jdGlvbiAoICQsIEhlbHBlcnMgKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gU3BlY2lhbE9uZSgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnSGVsbG8gU3BlY2lhbE9uZScgKTtcbiAgICAgICAgICAgIHRoaXMudWlkID0gSGVscGVycy5ndWlkKCk7XG4gICAgICAgICAgICB0aGlzLiRlbCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge3tpbml0OiBTcGVjaWFsTW9kdWxlLmluaXQsIHNheUhlbGxvOiBTcGVjaWFsTW9kdWxlLnNheUhlbGxvfX1cbiAgICAgICAgICovXG4gICAgICAgIFNwZWNpYWxPbmUucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnU3BlY2lhbE9uZS5pbml0JyApO1xuICAgICAgICAgICAgICAgIHRoaXMudWlkID0gSGVscGVycy5ndWlkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZXR1cm4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICByZXR1cm4gKCBTcGVjaWFsT25lICk7XG5cbiAgICB9XG4pOyJdLCJmaWxlIjoiYXBwL3NwZWNpYWwvc3BlY2lhbC10d28uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
