const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const requireAuth = require('../middleware/requireAuth');
const adminOnly = require('../middleware/adminOnly');






module.exports = router;