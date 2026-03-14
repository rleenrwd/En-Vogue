const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const requireAuth = require('../middleware/requireAuth');
const adminOnly = require('../middleware/adminOnly');

// Public
router.get('/', serviceController.getServices);

router.get('/:id', serviceController.getServiceById);


// Admin
router.post('/', [requireAuth, adminOnly], serviceController.createService);

router.put('/:id', [requireAuth, adminOnly], serviceController.updateService);

router.delete('/:id', [requireAuth, adminOnly], serviceController.deleteService);

module.exports = router;