const express = require('express')
const router = express.Router();
const ssheissueController = require('../controllers/sshe_issueController.js')
const { authenticateToken } = require('../middleware/authenticateToken')

router.post('/addssheissue',  [authenticateToken], ssheissueController.addDataSsheIsue)
router.get('/getssheissue',  [authenticateToken], ssheissueController.getDataSsheIssue)
router.put('/updatedssheissue',  [authenticateToken], ssheissueController.updateDataSsheIsue)
router.delete('/deletessheissue/:id',  [authenticateToken], ssheissueController.deleteDataSsueIssue)





module.exports = router;