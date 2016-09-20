/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
"use strict";define("app/clickmemodule",["jquery","app/helpers"],function(t,i){return function(t,n){return{uid:null,$el:null,$box:null,$button:null,init:function(){this.uid=i.guid(),this.$el=t,this.$box=this.$el.find(".mod-rjs-box"),this.$box.addClass(n),this.$el.data("uid",this.uid),this.$el.find(".js-module-title").html("Module "+this.uid),this.$button=this.$el.find(".js-button"),this.setListeners()},setListeners:function(){this.$button.on("click",this.onButtonClick.bind(this))},onButtonClick:function(t){this.$button.button("loading"),setTimeout(function(){this.$el.toggleClass("active");var t="true"===this.$button.attr("aria-pressed")?"unclick":"click";this.$button.button(t)}.bind(this),i.getRandomInt(0,1500)),t.preventDefault()}}}});