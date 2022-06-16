const express = require('express')
const router = express.Router();
const masterController = require('../controllers/masterController')
const { authenticateToken } = require('../middleware/authenticateToken')

// router.post('/addActivity', masterController.AddActivityController);

//-------------- company----------------------------- //
router.get('/getCompany',  [authenticateToken], masterController.getDataCompany)
router.post('/manageCompany', [authenticateToken], masterController.addCompany)
router.delete('/updateCompany/:id',  [authenticateToken], masterController.deleteDataCompany)



module.exports = router;