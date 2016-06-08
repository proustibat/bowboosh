'use strict';
/*--------------------------------------------------------------------------
 *
 * MODULE EXAMPLE
 *
 ---------------------------------------------------------------------------*/
function App() {

    var App = {

        uid: null,
        container: null,

        init: function () {
            this.uid = this.guid();
            console.log( 'Hello App [' + this.uid + ']' );
            this.container = document.body.getElementsByClassName( 'js-jumbotron-container' )[ 0 ];
            this.container.innerHTML = '<p>' + this.container.innerHTML + 'Hello UMD APP [' + this.uid + '] </p>';

        },

        sayHello: function () {
            console.log( 'App.sayHello [' + this.uid + ']' );
            this.container.innerHTML = '<p>' + this.container.innerHTML + 'App.sayHello</p>';
        },

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

        guid: function () {
            return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
        },

        s4: function () {
            return Math.floor( (1 + Math.random()) * 0x10000 )
                .toString( 16 )
                .substring( 1 );
        }
    };
    App.init();
    return App;
};

