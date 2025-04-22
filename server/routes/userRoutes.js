const express = require('express');
const router = express.Router();
const { signupValidation, loginValidation } = require('../middleware/authValidation');
const { registerUser, loginUser } = require('../controllers/userController');

router.post('/signup', signupValidation,registerUser);
router.post('/login', loginValidation,loginUser);

module.exports = router;
