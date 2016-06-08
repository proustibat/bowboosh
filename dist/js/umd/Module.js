;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Module = factory();
  }
}(this, function() {
'use strict';
/*--------------------------------------------------------------------------
 *
 * MODULE EXAMPLE
 *
 ---------------------------------------------------------------------------*/
function Module() {

    var Module = {

        uid: null,

        init: function () {
            console.log( "Hello Module" );
            this.uid = this.guid();
        },

        sayHello: function () {
            console.log( "MyModule.sayHello : ", this.uid );
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
    Module.init();
    return Module;
};

var module1 = new Module();
var module2 = new Module();

module1.sayHello();
module2.sayHello();
module1.sayHello();



return Module;
}));
