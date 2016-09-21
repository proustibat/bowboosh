/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
"use strict";define("app/specialmodule",["jquery","app/helpers","app/special/special-one","app/special/special-two"],function(t,e,i){function s(t){this.uid=e.guid(),this.$el=t}return s.prototype={init:function(){return this.$info=t('<span class="text-context">'),this.$el.find(".js-create-button").after(this.$info),this},sayHello:function(){return this.$info.addClass("bg-success").html("Hello Special Module"),this}},s});