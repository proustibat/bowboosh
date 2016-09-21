/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
"use strict";define("main",["jquery","app/helpers","bootstrap","app/clickmemodule"],function(e,o,l,a,t){for(var n=null,i=["color-fav-green-blue","color-fav-yellow","color-fav-pink","color-fav-red-orange","color-fav-green","color-fav-turquoise","color-fav-blue","color-fav-orange","color-fav-violet"],r=0,s=0,d=e(".js-modules .js-module").length,u=[];d>r;r++)u.push(new a(e(".js-modules .js-module").eq(r),i[s])),s=s===i.length-1?0:s+1,u.pop().init();e(".js-create-button").on("click",function(){e(this).button("loading"),setTimeout(function(){require(["app/specialmodule"],function(o){null===n?(n=new o(e(this).parents(".row")).init(),n.sayHello(),e(this).attr({disabled:"disabled","aria-pressed":!0}).addClass("disabled").removeClass("active").text("done")):alert("Special Module has already been created!")}.bind(this))}.bind(this),o.getRandomInt(0,1500))})});