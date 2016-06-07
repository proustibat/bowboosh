'use strict';
/*--------------------------------------------------------------------------
 * Main app module
 ---------------------------------------------------------------------------*/

/**
 * This is MyApp, it makes something awesome.
 * It's a self invokated function that runs automatically/immediately.
 *
 * @class MyApp
 * @constructor
 */
var MyApp = window.MyApp || (function ( document, window ) {

        /**
         * The __private variable encapsulate all PRIVATE functions
         * and properties.
         *
         * @property __private
         * @type {Object}
         * @default {Object}
         */
        var __private = {
            /**
             * The _config variable sets all properties that will be
             * handled by the app.
             *
             * @property __private
             * @type {Object}
             * @default {Object}
             */
            _config: {
                /**
                 * Information options
                 *
                 * @property information
                 * @type {Object}
                 * @default {Object}
                 */
                information: {
                    /**
                     * Version option
                     *
                     * @property version
                     * @type {String}
                     * @default '1.0.0'
                     */
                    version: '1.0.0',
                    /**
                     * Author option
                     *
                     * @property author
                     * @type {String}
                     * @default 'Jennifer Proust'
                     */
                    author: 'Jennifer Proust'
                },

                /**
                 * Message option
                 *
                 * @property message
                 * @type {String}
                 * @default 'Hello JS APP'
                 */
                message: 'Hello JS APP !'
            },

            /**
             * Give title element from `MyApp.title` the content setted,
             * if not setted it will be the default message
             * from `__private._config.message`
             *
             * @method sayMessage
             * @param {String} message A message to be a content for title document.
             * @return {Undefined}
             */
            sayMessage: function ( message ) {
                if ( message instanceof Event ) {
                    message.preventDefault();
                    message = null;
                }
                console.log( '__private.sayMessage : ', message );
                application.title.innerHTML = message || this._config.message;
            },

            /**
             * Give author content for page title
             * from ``__private._config.information.author`
             *
             * @method sayAuthor
             * @return {Undefined}
             */
            sayAuthor: function ( e ) {
                console.log( '__private.sayAuthor' );
                e.preventDefault();
                __private.sayMessage( 'Author: ' + this._config.information.author );
            },

            /**
             * Give version content for page title
             * from ``__private._config.information.version`
             *
             * @method sayVersion
             * @return {Undefined}
             */
            sayVersion: function ( e ) {
                console.log( '__private.sayVersion' );
                e.preventDefault();
                __private.sayMessage( 'Version: ' + this._config.information.version );
            }
        };

        /**
         * Encapsulates all PUBLIC functions
         * and properties.
         *
         * @property application
         * @type {Object}
         * @default {Object}
         */
        var application = {

            /**
             * Initialize the project by caching variables
             * and binding the objects. It can also initialize
             * other methods.
             *
             * @method init
             * @return {Undefined}
             */
            init: function () {
                console.log( 'application.init' );
                this._cache();
                this._bind();

                __private.sayMessage();
            },

            /**
             * Creates public properties that will be
             * handled by other methods. Caching elements is a
             * good practice.
             *
             * @method _cache
             * @return {Undefined}
             */
            _cache: function () {
                console.log( 'application._cache' );
                this.body = document.body;
                this.title = this.body.getElementsByTagName( 'h1' )[ 0 ];
                this.buttonAuthor = this.body.getElementsByClassName( 'js-btn-author' )[ 0 ];
                this.buttonVersion = this.body.getElementsByClassName( 'js-btn-version' )[ 0 ];
                this.buttonReset = this.body.getElementsByClassName( 'js-btn-reset' )[ 0 ];
            },

            /**
             * Bind all cached dom elements from `MyApp._cache`.
             * It sets methods to events made by the DOM.
             *
             *
             * @method _bind
             * @return {Undefined}
             */
            _bind: function () {
                console.log( 'application._bind' );
                this.buttonAuthor.addEventListener( 'click', __private.sayAuthor.bind( __private ), false );
                this.buttonVersion.addEventListener( 'click', __private.sayVersion.bind( __private ), false );
                this.buttonReset.addEventListener( 'click', __private.sayMessage.bind( __private ), false );

            }
        };

        // make app visible by the MyApp;
        return application;

    })( document, window );
//We also can auto-initialize the app by adding a `.init()`, like this:
//})(document, window).init();

// Initialize app
MyApp.init();


