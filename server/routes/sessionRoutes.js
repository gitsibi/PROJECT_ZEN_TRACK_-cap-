const express = require('express');
const router = express.Router();
const {  getAllSessionsController, getSingleSessionController,createSession} = require('../controllers/sessionController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all sessions (Protected)
router.get('/', authMiddleware, getAllSessionsController);
router.get('/:id', authMiddleware, getSingleSessionController);// Route to get a single session by ID (Protected)
router.post('/', authMiddleware, createSession);// Route to create a new session (Protected)

module.exports = router;
