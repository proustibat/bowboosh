/**
 * bowboosh - Simple boilerplate with gulp, bower, bootstrap sass, font-awesome, bootswatch themes
 * @version v1.0.0
 * @link https://github.com/proustibat/bowboosh
 * @license MIT
 */
'use strict';
// Require.js allows us to configure shortcut alias
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuLy8gUmVxdWlyZS5qcyBhbGxvd3MgdXMgdG8gY29uZmlndXJlIHNob3J0Y3V0IGFsaWFzXG5yZXF1aXJlLmNvbmZpZygge1xuICAgICAgICBiYXNlVXJsOiAnanMvcmVxdWlyZWpzJyxcbiAgICAgICAgZGVwczogWyBcIm1haW5cIiBdLFxuICAgICAgICBwYXRoczoge1xuICAgICAgICAgICAganF1ZXJ5OiAnLi4vdmVuZG9yL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4nLFxuICAgICAgICAgICAgYm9vdHN0cmFwOiBcIi4uL3ZlbmRvci9ib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwLm1pblwiLFxuICAgICAgICAgICAgb3V0ZGF0ZWRicm93c2VyOiBcIi4uLy4uL291dGRhdGVkYnJvd3Nlci9vdXRkYXRlZGJyb3dzZXIubWluXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hpbToge1xuICAgICAgICAgICAgJ2Jvb3RzdHJhcCc6IHtcbiAgICAgICAgICAgICAgICBkZXBzOiBbICdqcXVlcnknIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb3V0ZGF0ZWRicm93c2VyJzoge1xuICAgICAgICAgICAgICAgIGV4cG9ydHM6ICdvdXRkYXRlZEJyb3dzZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG4iXSwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
