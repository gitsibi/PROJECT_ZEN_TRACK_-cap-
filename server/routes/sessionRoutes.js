const express = require('express');
const router = express.Router();
const { getAllSessionsController, getSingleSessionController, createSession} = require('../controllers/sessionController');

// Route to get all sessions
router.get('/', getAllSessionsController);
router.get('/get-single-session', getSingleSessionController); // Route to get a single session by ID
router.post('/create-new-session',createSession); // Route to create a new session


module.exports = router;
