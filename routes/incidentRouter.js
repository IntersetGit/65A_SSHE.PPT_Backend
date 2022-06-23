const express = require('express')
const router = express.Router();
const incidentController = require('../controllers/incidentController')
const { authenticateToken } = require('../middleware/authenticateToken')

router.get('/getIncident',  [authenticateToken], incidentController.getDataIncident)
