const express = require('express');
const router = express.Router();
const users_controllers = require('../controllers/users_controllers');
const functions_controllers = require('../controllers/functions_controllers');
///////////////////////////////////////////////////////////////////////
/////////////////////////// User routes ///////////////////////////////
///////////////////////////////////////////////////////////////////////
router.post('/api/addUser', users_controllers.addUser);
router.post('/api/validateUser', users_controllers.validateUser);
///////////////////////////////////////////////////////////////////////
//////////////////////// Function routes //////////////////////////////
///////////////////////////////////////////////////////////////////////
router.post('/api/addFunction', functions_controllers.addFunction);
router.post('/api/getUserFunctions', functions_controllers.getUserFunctions);
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;
//# sourceMappingURL=users.js.route.js.map