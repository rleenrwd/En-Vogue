const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.post('/login', auth.loginAdmin);

router.post('/logout', auth.logoutAdmin);

module.exports = router;