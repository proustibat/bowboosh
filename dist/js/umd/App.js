;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.App = factory();
  }
}(this, function() {
'use strict';
function App() {
    console.log("Hello Module App");


    this.uid = null;

    this.init = function() {
        console.log("App.init");
        this.uid = this.guid();
    };

    this.sayHello = function() {
        console.log("App.sayHello : ", this.uid);
    };

    this.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
    }

    this.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}

var myApp1 = new App();
myApp1.init();

var myApp2 = new App();
myApp2.init();

myApp1.sayHello();
myApp2.sayHello();
myApp1.sayHello();







return App;
}));
