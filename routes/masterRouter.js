const express = require('express');
const router = express.Router();
const masterController = require('../controllers/masterController');
const { authenticateToken } = require('../middleware/authenticateToken');

// router.post('/addActivity', masterController.AddActivityController);

//-------------- company----------------------------- //
router.get('/getCompany', masterController.getDataCompany);
router.get('/searchCompany', masterController.getSearchCompany )
router.post('/CreateCompany', masterController.addCompany )
router.post('/updateCompany', masterController.editDataCompany )
router.delete('/updateCompany', masterController.deleteDataCompany )



module.exports = router;