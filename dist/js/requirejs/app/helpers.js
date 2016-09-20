/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
"use strict";define("app/helpers",["jquery"],function(t){return{guid:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},getRandomInt:function(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t))+t}}});