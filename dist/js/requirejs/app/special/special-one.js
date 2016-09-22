/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
'use strict';
define( 'app/special/special-one', [
        'jquery',
        'app/helpers'
    ], function ( $, Helpers ) {

        /**
         * SpecialOne constructor
         */
        return function () {
            console.log( 'Hello SpecialOne' );

            /**
             * SpecialOne prototype
             */
            return {

                uid: null,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAvc3BlY2lhbC9zcGVjaWFsLW9uZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5kZWZpbmUoICdhcHAvc3BlY2lhbC9zcGVjaWFsLW9uZScsIFtcbiAgICAgICAgJ2pxdWVyeScsXG4gICAgICAgICdhcHAvaGVscGVycydcbiAgICBdLCBmdW5jdGlvbiAoICQsIEhlbHBlcnMgKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpYWxPbmUgY29uc3RydWN0b3JcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ0hlbGxvIFNwZWNpYWxPbmUnICk7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU3BlY2lhbE9uZSBwcm90b3R5cGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgICAgIHVpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAkZWw6IG51bGwsXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdTcGVjaWFsT25lLmluaXQnICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlkID0gSGVscGVycy5ndWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfTtcblxuICAgIH1cbik7Il0sImZpbGUiOiJhcHAvc3BlY2lhbC9zcGVjaWFsLW9uZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
