const express = require( "express" );
const router = express.Router();

// Require our controllers.
const addressController = require( "../controllers/AddressController" );

// Address parsing
router.post( "/", addressController.parse_post );

module.exports = router;
