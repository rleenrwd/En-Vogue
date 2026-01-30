const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const adminOnly = require('../middleware/adminOnly');
const requireAuth = require('../middleware/requireAuth');

// Public
router.get('/availability', bookingController.getAvailability);
router.post('/', bookingController.createBooking);

// Admin
router.get('/', [requireAuth, adminOnly], bookingController.getBookings);




module.exports = router;