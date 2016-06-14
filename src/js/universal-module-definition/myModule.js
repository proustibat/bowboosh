'use strict';
function MyModule() {

    this.uid = null;
    this.container = null;
    this.init = function () {
        this.uid = this.guid();
        console.log( 'Hello MyModule [' + this.uid + ']' );
        this.container = document.body.getElementsByClassName( 'js-jumbotron-container' )[ 0 ];
        this.container.innerHTML = '<p>' + this.container.innerHTML + 'Hello Module [' + this.uid + '] </p>';

    };
    this.sayHello = function () {
        console.log( 'MyModule.sayHello [' + this.uid + ']' );
        this.container.innerHTML = '<p>' + this.container.innerHTML + 'Module.sayHello [' + this.uid + '] </p>';
    };
    this.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
    };
    this.s4 = function () {
        return Math.floor( (1 + Math.random()) * 0x10000 )
            .toString( 16 )
            .substring( 1 );
    };
}


