var express = require( 'express' );
var app = express();

var bodyParser = require( 'body-parser' );
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded( { extended: false } );


/***********************************************************************/
/***********************************************************************/
/***********************************************************************/

app.use( express.static( 'public' ) );

// This responds with "Hello World" on the homepage
app.get( '/', function ( req, res ) {
    console.log( "Got a GET request for the homepage" );
    res.send( 'Hello World' );
} );

/***********************************************************************
 * REST EXAMPLE ROUTES
 * *********************************************************************/

// This responds a POST request for the homepage
app.post( '/', function ( req, res ) {
    console.log( "Got a POST request for the homepage" );
    res.send( 'Hello POST' );
} );

// This responds a DELETE request for the /del_item page.
app.delete( '/del_item', function ( req, res ) {
    console.log( "Got a DELETE request for /del_item" );
    res.send( 'Hello DELETE' );
} );

// This responds a GET request for the /list_item page.
app.get( '/list_item', function ( req, res ) {
    console.log( "Got a GET request for /list_item" );
    res.send( 'Page Listing' );
} );

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get( '/ab*cd', function ( req, res ) {
    console.log( "Got a GET request for /ab*cd" );
    res.send( 'Page Pattern Match' );
} );


/***********************************************************************
 * GET METHOD EXAMPLE
 * *********************************************************************/
app.get( '/index.html', function ( req, res ) {
    res.sendFile( __dirname + "/" + "index.html" );
} );
app.get( '/process_get', function ( req, res ) {

    // Prepare output in JSON format
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log( response );
    res.end( JSON.stringify( response ) );
} );

/***********************************************************************
 * POST METHOD EXAMPLE
 * *********************************************************************/
app.post( '/process_post', urlencodedParser, function ( req, res ) {

    // Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log( response );
    res.end( JSON.stringify( response ) );
} );



/***********************************************************************/
/***********************************************************************/
/***********************************************************************/


var server = app.listen( 2901, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log( "App listening at http://%s:%s", host, port )

} );