const express = require('express');
const router = express.Router();
const masterController = require('../controllers/masterController');
const { authenticateToken } = require('../middleware/authenticateToken');

router.post('/addActivity', masterController.AddActivityController);



module.exports = router;