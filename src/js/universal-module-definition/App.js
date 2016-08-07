'use strict';
/**
 * App
 * @returns {{uid: null, container: null, init: App.init, sayHello: App.sayHello, createModules: App.createModules, guid: App.guid, s4: App.s4}}
 * @constructor
 */
function App() {
    /**
     *
     * @type {{uid: null, container: null, init: App.init, sayHello: App.sayHello, createModules: App.createModules, guid: App.guid, s4: App.s4}}
     */
    var App = {

        uid: null,
        container: null,
        /**
         * Init
         */
        init: function () {
            this.uid = this.guid();
            console.log( 'Hello App [' + this.uid + ']' );
            this.el = document.body.getElementsByClassName( 'js-module-umd' )[ 0 ];
            this.container = this.el.getElementsByClassName( 'js-jumbotron-container' ) [ 0 ];
            this.container.innerHTML = '<p>' + this.container.innerHTML + 'Hello UMD APP [' + this.uid + '] </p>';

        },
        /**
         * sayHello
         */
        sayHello: function () {
            console.log( 'App.sayHello [' + this.uid + ']' );
            this.container.innerHTML = '<p>' + this.container.innerHTML + 'App.sayHello</p>';
        },
        /**
         * createModule
         */
        createModules: function () {
            console.log( 'App.createModules' );
            this.container.innerHTML = '<p>' + this.container.innerHTML + 'App.createModule</p>';

            var module1 = new window.MyModule();
            module1.init();

            var module2 = new window.MyModule();
            module2.init();

            module1.sayHello();
            module2.sayHello();
        },
        /**
         * guid
         * @returns {string}
         */
        guid: function () {
            return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
        },
        /**
         * s4
         * @returns {string}
         */
        s4: function () {
            return Math.floor( (1 + Math.random()) * 0x10000 )
                .toString( 16 )
                .substring( 1 );
        }
    };

    App.init();
    return App;
}