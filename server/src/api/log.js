const {Router} = require('express');
const {addLocation,fetchLocation} = require('../controller/logController');


const router = Router();

router.get('/',fetchLocation);
router.post('/',addLocation);


module.exports = router;