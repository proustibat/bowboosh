'use strict';
/**
 * Require.js allows us to configure shortcut alias
 */
require.config( {
        baseUrl: 'js/requirejs',
        deps: [ "main" ],
        paths: {
            jquery: '../vendor/jquery/dist/jquery.min',
            bootstrap: "../vendor/bootstrap-sass/assets/javascripts/bootstrap.min",
            outdatedbrowser: "../../outdatedbrowser/outdatedbrowser.min"
        },
        shim: {
            'bootstrap': {
                deps: [ 'jquery' ]
            },
            'outdatedbrowser': {
                exports: 'outdatedBrowser'
            }
        }
    }
);

