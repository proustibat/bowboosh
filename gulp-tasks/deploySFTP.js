"use strict";
module.exports = function ( gulp, plugins, config, pkg, bwr ) {

    /*******************************************************************************
     * Description:
     *
     *   Push files to remote server via SFTP
     *
     *
     * Examples:
     *
     *   - Using ./credentials.json file as following :
     *      {
     *          "host": "164.129.01.86",
     *          "user": "username",
     *          "password": "password-of-the-user",
     *          "remoteBase": "/var/www/html"
     *      }
     *   Then run `gulp deploySFTP`
     *
     *   - Using arguments gulp command:
     *   `gulp deploySFTP --host="164.129.01.86" --user="username" --remoteBase="var/www/html" --password="password-of-the-user"`
     *
     *
     ******************************************************************************/

    // TODO : errors occur when remote directory exists

    gulp.task( 'deploySFTP', 'Push changes to remote servers (eg: staging/production)', function () {

            var missingParameters = [];

            // Collects parameters from an existing file
            var secretOptions = {};
            try {
                plugins.util.log( 'Searching for credentials file...' );
                secretOptions = require( '../credentials.json' );
            }
            catch ( e ) {
                plugins.util.log( "No credentials: ", e.toString() );
            }

            // Collects parameters from task arguments
            plugins.util.log( 'Parsing credentials arguments...' );
            var options = {
                host: plugins.yargs.argv.host || secretOptions.host || null,
                user: plugins.yargs.argv.user || secretOptions.user || null,
                password: plugins.yargs.argv.password || secretOptions.password || null,
                remoteBase: plugins.yargs.argv.remoteBase || secretOptions.remoteBase || null
            };

            // Fix an issue when user enters a slash in the beginning of remotePath
            if ( options.remoteBase && (options.remoteBase.charAt( 0 ) != '/') ) {
                options.remoteBase = '/' + options.remoteBase;
            }

            // Check parameters
            plugins.util.log( 'Checking missing parameters...' );
            var allKeys = Object.keys( options );
            allKeys.forEach( function ( key ) {
                    if ( !options[ key ] ) {
                        missingParameters.push( key );
                    }
                }
            );

            // Required parameters are missing
            if ( missingParameters.length > 0 ) {
                plugins.throwError( 'deploySFTP', 'Missing required parameters: ' + missingParameters.toString() );
            }

            // All parameters are ok, continue to push on server
            plugins.util.log( 'All required parameters found : ', options );


            // DEPLOYMENTS

            // site or webapps
            options.remotePath = options.remoteBase + '/bowboosh';
            plugins.util.log( 'Push web site on server in : ', options.remotePath );
            gulp.src( [
                    './dist/**/*',
                    '!./.htaccess', // exluded files
                ]
            ).pipe( plugins.sftp( options ) );

            // online documentation
            options.remotePath = options.remoteBase + '/bowboosh/docs';
            plugins.util.log( 'Push documentation on server in : ', options.remotePath );
            gulp.src( [
                    './docs/**/*'
                ]
            ).pipe( plugins.sftp( options ) );
        }
    );
};