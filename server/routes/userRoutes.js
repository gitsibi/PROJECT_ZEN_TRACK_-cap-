const express = require('express');
const router = express.Router();
const { signupValidation, loginValidation } = require('../middleware/authValidation');
const { registerUser, loginUser, setupProfile, getUserProfile,googleLoginUser, } = require('../controllers/userController');
const isAuthenticated = require('../middleware/authMiddleware');

router.post('/signup', signupValidation,registerUser);
router.post('/login', loginValidation,loginUser);
router.put('/setup-profile',isAuthenticated,setupProfile);
router.post('/google-login', googleLoginUser); 
router.get('/profile', isAuthenticated, getUserProfile)
  
module.exports = router;
