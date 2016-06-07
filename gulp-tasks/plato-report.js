"use strict";
module.exports = function ( gulp, plugins, config, pkg, bwr  ) {
    gulp.task( 'plato-report', 'Run Plato: javaScript source analysis and visualizer', function () {
            var files = [ config.srcPath + '/' + config.jsDir + '/**/*.js' ];
            var outputDir = './' + config.docDir + '/plato';
            var options = {
                title: 'Plato report: Bowboosh'
            };

            var callback = function ( report ) {
                console.log( 'Plato report done!' );
            };

            console.log( 'Running Plato... Output: ' + outputDir );
            plugins.plato.inspect( files, outputDir, options, callback );

        }
    );

};
