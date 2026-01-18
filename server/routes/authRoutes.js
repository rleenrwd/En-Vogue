const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const requireAuth = require('../middleware/requireAuth');

router.post('/login', auth.loginAdmin);

router.post('/logout', auth.logoutAdmin);

router.get('/me', requireAuth, auth.getMe);

module.exports = router;