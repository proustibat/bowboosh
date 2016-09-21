/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
"use strict";define("main",["jquery","app/helpers","bootstrap","app/clickmemodule"],function(e,o,l,a){require(["outdatedbrowser"],function(e){e({bgColor:"#f25648",color:"#ffffff",lowerThan:"borderImage",languagePath:"outdatedbrowser/lang/en.html"})});for(var r=null,t=["color-fav-green-blue","color-fav-yellow","color-fav-pink","color-fav-red-orange","color-fav-green","color-fav-turquoise","color-fav-blue","color-fav-orange","color-fav-violet"],n=0,i=0,s=e(".js-modules .js-module").length,d=[];s>n;n++)d.push(new a(e(".js-modules .js-module").eq(n),t[i])),i=i===t.length-1?0:i+1,d.pop().init();e(".js-create-button").on("click",function(){e(this).button("loading"),setTimeout(function(){require(["app/specialmodule"],function(o){null===r?(r=new o(e(this).parents(".row")).init(),r.sayHello(),e(this).attr({disabled:"disabled","aria-pressed":!0}).addClass("disabled").removeClass("active").text("done")):alert("Special Module has already been created!")}.bind(this))}.bind(this),o.getRandomInt(0,1500))})});