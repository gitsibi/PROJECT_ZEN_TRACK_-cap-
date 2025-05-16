const express = require('express');
const router = express.Router();
const { signupValidation, loginValidation } = require('../middleware/authValidation');
const { registerUser, loginUser, checkUserProfile,googleLoginUser,getTokenUser } = require('../controllers/userController');
const isAuthenticated = require('../middleware/authMiddleware');

router.post('/signup', signupValidation,registerUser);
router.post('/login', loginValidation,loginUser);
router.post('/google-login', googleLoginUser); 
router.post('/check-user-profile', isAuthenticated, checkUserProfile);
router.get('/check', isAuthenticated,getTokenUser);

module.exports = router;
