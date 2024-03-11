const {
  body,
  validationResult
} = require( "express-validator" );
const asyncHandler = require( "express-async-handler" );
const postal = require( 'node-postal' );

// Handle address parsing on POST.
exports.parse_post = [

  // Validate and sanitize fields.
  body( "address", "Address must not be empty." )
    .trim()
    .isLength( { min: 1 } )
    .escape(),

  // Process request after validation and sanitization.
  asyncHandler( async ( req, res, next ) => {

    // Extract the validation errors from a request.
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {

      // Returning errors object
      res.json( errors )
    } else {

      // Parsing address into component parts
      res.json( postal.parser.parse_address( req.body.address ) )
    }
  } )
];
