const {Router} = require('express');
const {addLocation,fetchLocation,getUserLocations} = require('../controller/logController');
const { tokkenChecker } = require('../middleware/tokkenChecker');


const router = Router();
// to fetch all location require no tokken
router.get('/',fetchLocation);
// to fetch location of specific user with valid tokken
router.get('/userlocation',tokkenChecker,getUserLocations);
//to add location of user with valid tokken
router.post('/',tokkenChecker,addLocation);


module.exports = router;