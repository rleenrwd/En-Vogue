const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const adminOnly = require('../middleware/adminOnly');
const requireAuth = require('../middleware/requireAuth');

router.post('/', messageController.createMessage);

// Admin

module.exports = router;