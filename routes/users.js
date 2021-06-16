const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const users_controllers = require('../controllers/users_controllers');
const functions_controllers = require('../controllers/functions_controllers');

/// ////////////////////////////////////////////////////////////////////
/// //////////////////////// User routes ///////////////////////////////
/// ////////////////////////////////////////////////////////////////////

app.post('/api/addUser', users_controllers.addUser);
app.post('/api/validateUser', users_controllers.validateUser);

/// ////////////////////////////////////////////////////////////////////
/// ///////////////////// Function routes //////////////////////////////
/// ////////////////////////////////////////////////////////////////////

app.post('/api/addFunction', functions_controllers.addFunction);
app.post('/api/getUserFunctions', functions_controllers.getUserFunctions);
app.post('/api/getCategoryFunctions', functions_controllers.getCategoryFunctions);
app.post('/api/getFunction', functions_controllers.getFunction);

app.get('/api/getUserFunctions2', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET users listing. */
app.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = app;
