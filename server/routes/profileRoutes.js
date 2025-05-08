const express = require('express');
const router = express.Router();
const { createProfile, updateProfile, getProfile } = require('../controllers/profileController');
const isAuthenticated = require('../middleware/authMiddleware');

// Create a profile
router.post('/profile',isAuthenticated, createProfile);

// Update profile details
router.put('/profile/:userId',isAuthenticated, updateProfile);

// Get profile details by userId
router.get('/profile/:userId',isAuthenticated, getProfile);


module.exports = router;
