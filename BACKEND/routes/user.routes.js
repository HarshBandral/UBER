const express  = require('express');
const router = express.Router();
const {body} = require('express-validator'); //object destructuring
const userController = require('../controllers/user.controller');
const { useConnection } = require('../models/user.model');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be of atleast 3 characteres'),
    body('password').isLength({min:6}).withMessage('Password must be of atleast 6 characters'),
],userController.registerUser);

module.exports = router;