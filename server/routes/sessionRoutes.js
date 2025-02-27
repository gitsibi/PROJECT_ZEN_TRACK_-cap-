const express = require('express');
const router = express.Router();
const { getAllSessionsController, getSingleSessionController } = require('../controllers/sessionController');

// Route to get all sessions
router.get('/', getAllSessionsController);

// Route to get a single session by ID
router.get('/get-single-session', getSingleSessionController);

module.exports = router;
