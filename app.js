require( 'dotenv' ).config()
const express = require( 'express' )
const app = express()
const createError = require( "http-errors" );
const indexRouter = require( "./routes/index" );
const compression = require( "compression" );
const logger = require( "morgan" );

app.use( logger( "dev" ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( compression() ); // Compress all routes
app.use( "/", indexRouter );

// catch 404 and forward to error handler
app.use( function ( req, res, next ) {
  next( createError( 404 ) );
} );

// error handler
app.use( function ( err, req, res, next ) {
  res.json( err );
} );

module.exports = app;
