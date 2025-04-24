const express  = require('express');
const router = express.Router();
const {body} = require('express-validator'); //object destructuring
const userController = require('../controllers/user.controller');
const { useConnection } = require('../models/user.model');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be of atleast 3 characteres'),
    body('password').isLength({min:6}).withMessage('Password must be of atleast 6 characters'),
],userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be of atleast 6 characters'),
],userController.loginUser);

router.get('/profile',authMiddleware.authUser,userController.getUserProfile);
router.get('/logout',authMiddleware.authUser,userController.logoutUser);
module.exports = router;