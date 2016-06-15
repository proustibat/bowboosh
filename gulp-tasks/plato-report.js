"use strict";
module.exports = function ( gulp, plugins, config, pkg, bwr ) {
    gulp.task( 'plato-report', 'Run Plato: javaScript source analysis and visualizer', function () {
            var files = [ config.srcPath + '/' + config.javascript.dir + '/**/*.js' ];
            var outputDir = config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.plato
            var options = {
                title: 'Plato report: Bowboosh'
            };

            var callback = function ( report ) {
                plugins.util.log( plugins.util.colors.bgGreen.inverse.bold( 'Plato report done!' ) );
            };

            plugins.util.log( plugins.util.colors.inverse.bold( 'Running Plato... Output: ' + outputDir ) );
            plugins.plato.inspect( files, outputDir, options, callback );

        }
    );

};
