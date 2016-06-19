"use strict";
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    gulp.task( 'build-jsdoc', 'Generate javascript documentation', [ 'clean-jsdoc' ], function ( cb ) {
            plugins.configJSDoc = {
                "source": {
                    // An optional array of paths that JSDoc should generate documentation for.
                    // The paths given to JSDoc on the command line are combined with these to form the set
                    // of files JSDoc will scan. Recall that if a path is a directory, the -r option may
                    // be used to recurse into it.
                    "include": [ /* array of paths to files to generate documentation for */ ],
                    // Only files ending in ".js" and ".jsdoc" will be processed
                    "includePattern": ".+\\.js(doc)?$",
                    // Any file starting with an underscore or in a directory
                    // starting with an underscore will be ignored
                    "excludePattern": "(^|\\/|\\\\)_"//,
                    // An optional array of paths that JSDoc should ignore.
                    // In JSDoc 3.3.0 and later, this array may include subdirectories of the paths in source.include.
                    //"exclude": [ './src/path/to/a/file.js' ]
                },
                "opts": {
                    // "destination": config.docPath + "/jsdoc",
                    "readme": "./README.md",
                    //"package": "./package.json",
                    "recurse": true,
                    "encoding": "utf8"
                },
                "plugins": [
                    "plugins/markdown"
                ],
                "tags": {
                    "allowUnknownTags": true
                },
                "templates": {
                    "default": {
                        "outputSourceFiles": true
                    },
                    // If true, {@link asdf} will be rendered in normal font if "asdf" is a URL,
                    // and monospace otherwise. For example, {@link http://github.com} will render
                    // in plain-text but {@link MyNamespace.myFunction} will be in monospace.
                    "cleverLinks": false,
                    // All link texts from the @link tag will be rendered in monospace
                    "monospaceLinks": false,
                    // The name of the system being documented. This will appear in the page title for each page
                    "systemName": "bowboosh",
                    // Any markup want to appear in the footer of each page. This is not processed at all,
                    // just printed exactly as you enter it
                    //"footer": "This is a footer",
                    // You can add a copyright message below the footer and above the JSDoc
                    // timestamp at the bottom of the page
                    "copyright": "&copy; Jennifer Proust - 2016",
                    // by default, the current date is always shown in the footer of the generated documentation
                    "includeDate": false,
                    // The template uses top level navigation with dropdowns for the contents of each category.
                    // On large systems these dropdowns can get large enough to expand beyond the page.
                    // To make the dropdowns render wider and stack the entries vertically, set this option to
                    // "inline". Otherwise set it to "vertical" to make them regular stacked dropdowns.
                    "navType": "vertical",
                    // This is the name of the them you want to use in all lowercase. The valid options are
                    // cerulean | cosmo | cyborg | flatly | journal | lumen | paper | readable |
                    // sandstone | simplex | slate | spacelab | superhero | united | yeti
                    "theme": "lumen",
                    // When true, line numbers will appear in the source code listing
                    "linenums": true,
                    //  If your pages have a large number of symbols, it can be easy to get lost in all the text.
                    // If you turn this to true all of the symbols in the page will roll their contents up so that
                    // you just get a list of symbols that can be expanded and collapsed.
                    "collapseSymbols": true,
                    // Bootstrap navbars come in two flavors, regular and inverse where inverse is
                    // generally higher contrast. Set this to true to use the inverse header.
                    "inverseNav": false,
                    // Defaults to true. Specifies whether jsdoc should sort data or use file order.
                    // Can also be a string and if so it is passed to jsdoc directly.
                    // The default string is "longname, version, since"
                    "sort": false
                }
            };


            gulp.task( 'build-doc-smp', 'Generate document fo simple javascript module pattern', [], function ( cb ) {
                    console.log( 'build-doc-smp' );
                    plugins.configJSDoc.opts.destination = config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.jsdir + '/' + config.javascript.subdir.smp;
                    return gulp.src( [ config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp + '/**/*.js' ], { read: true } )
                        .pipe( plugins.plumber( { errorHandler: plugins.tools.errorHandler } ) )
                        .pipe( plugins.jsdoc( plugins.configJSDoc ), cb );
                }
            );

            gulp.task( 'build-doc-umd', 'Generate documentation for umd javascript', [], function ( cb ) {
                    console.log( 'build-doc-umd' );
                    plugins.configJSDoc.opts.destination = config.documentation.rootPath + '/' + config.documentation.dir + '/' + config.documentation.jsdir + '/' + config.javascript.subdir.umd;
                    return gulp.src( [ config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.umd + '/**/*.js' ], { read: true } )
                        .pipe( plugins.plumber( { errorHandler: plugins.tools.errorHandler } ) )
                        .pipe( plugins.jsdoc( plugins.configJSDoc ), cb );
                }
            );

            plugins.runSequence( [ 'build-doc-umd' ], [ 'build-doc-smp' ], cb );
        }
    );


    gulp.task( 'watch-jsdoc', 'Watch javascript files to regenerate documentation', [ 'build-jsdoc' ], function ( cb ) {
            var allJs = [
                config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.smp + '/**/*.js',
                config.srcPath + '/' + config.javascript.dir + '/' + config.javascript.subdir.umd + '/**/*.js'
            ];
            plugins.tools.watch( allJs, [ 'build-jsdoc' ] );
        }
    );

};
