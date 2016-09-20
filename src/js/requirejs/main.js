'use strict';
// Require.js allows us to configure shortcut alias
require.config( {
        baseUrl: 'js/vendor',
        deps: [ "App" ],
        paths: {
            jquery: 'jquery/dist/jquery.min',
            bootstrap: "bootstrap-sass/assets/javascripts/bootstrap.min"
        },
        shim: {
            'bootstrap': {
                deps: [ 'jquery' ]
            }
        }
    }
);