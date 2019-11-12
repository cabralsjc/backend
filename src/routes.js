const express = require('express');
const UserController = require('./controllers/UserController');
const SmsController = require('./controllers/SmsController'); 


const routes = express.Router();

routes.get('/user/:userName/sms', SmsController.index);
routes.post('/user', UserController.store);
routes.post('/user/:userName/sms', SmsController.store);
module.exports = routes;