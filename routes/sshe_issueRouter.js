const express = require('express')
const router = express.Router();
const ssheissueController = require('../controllers/sshe_issueController.js')
const { authenticateToken } = require('../middleware/authenticateToken')

router.post('/addssheissue',  [authenticateToken], ssheissueController.addDataSsheIsue)





module.exports = router;