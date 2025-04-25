const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator'); 

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be of atleast 3 characteres'),
    body('password').isLength({min:6}).withMessage('Password must be of atleast 6 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be of atleast 3 characteres'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be of atleast 3 characteres'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be one of the following: car, motorcycle, auto'),
],captainController.registerCaptain);


module.exports = router;