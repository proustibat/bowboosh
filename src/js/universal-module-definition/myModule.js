'use strict';
/**
 * MyModule
 * @constructor
 */
function MyModule() {

    this.uid = null;
    this.container = null;

    /**
     * init
     */
    this.init = function () {
        this.uid = this.guid();
        console.log( 'Hello MyModule [' + this.uid + ']' );
        this.el = document.body.getElementsByClassName( 'js-module-umd' )[ 0 ];
        this.container = this.el.getElementsByClassName( 'js-jumbotron-container' ) [ 0 ];
        this.container.innerHTML = '<p>' + this.container.innerHTML + 'Hello Module [' + this.uid + '] </p>';

    };

    /**
     * sayHello
     */
    this.sayHello = function () {
        console.log( 'MyModule.sayHello [' + this.uid + ']' );
        this.container.innerHTML = '<p>' + this.container.innerHTML + 'Module.sayHello [' + this.uid + '] </p>';
    };

    /**
     * guid
     * @returns {string}
     */
    this.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
    };

    /**
     * s4
     * @returns {string}
     */
    this.s4 = function () {
        return Math.floor( (1 + Math.random()) * 0x10000 )
            .toString( 16 )
            .substring( 1 );
    };
}


