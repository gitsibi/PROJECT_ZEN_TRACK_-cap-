const express = require('express');
const router = express.Router();
const {  getAllSessionsController, getSingleSessionController,createSession} = require('../controllers/sessionController');
const isAutheticated = require('../middleware/authMiddleware');

// Route to get all sessions (Protected)
router.get('/', isAutheticated, getAllSessionsController);
router.get('/:id', isAutheticated, getSingleSessionController);// Route to get a single session by ID (Protected)
router.post('/create-session', isAutheticated, createSession);// Route to create a new session (Protected)

module.exports = router;
