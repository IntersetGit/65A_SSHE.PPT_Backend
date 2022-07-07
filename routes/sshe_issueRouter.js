const express = require('express')
const router = express.Router();
const ssheissueController = require('../controllers/sshe_issueController.js')
const { authenticateToken } = require('../middleware/authenticateToken')

router.get('/getssheissue',  [authenticateToken], ssheissueController.addDataSsheIsue)





module.exports = router;