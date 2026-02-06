const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const adminOnly = require('../middleware/adminOnly');
const requireAuth = require('../middleware/requireAuth');

router.post('/', messageController.createMessage);

// Admin
router.get('/admin', [requireAuth, adminOnly], messageController.adminGetAllMessages);
router.delete('/admin/:id', [requireAuth, adminOnly], messageController.adminDeleteMessage);





module.exports = router;