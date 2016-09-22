/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
"use strict";require.config({baseUrl:"js/requirejs",deps:["main"],paths:{jquery:"../vendor/jquery/dist/jquery.min",bootstrap:"../vendor/bootstrap-sass/assets/javascripts/bootstrap.min",outdatedbrowser:"../../outdatedbrowser/outdatedbrowser.min"},shim:{bootstrap:{deps:["jquery"]},outdatedbrowser:{exports:"outdatedBrowser"}}});