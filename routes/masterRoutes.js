const express = require('express')
const router = express.Router();
const masterController = require('../controllers/masterController')
const { authenticateToken } = require('../middleware/authenticateToken')

// router.post('/addActivity', masterController.AddActivityController);

//-------------- company----------------------------- //
router.get('/getCompany',  [authenticateToken], masterController.getDataCompany)
router.post('/manageCompany', [authenticateToken], masterController.addCompany)
router.delete('/updateCompany/:id',  [authenticateToken], masterController.deleteDataCompany)


router.get('/getProject',  [authenticateToken], masterController.getDataProject)
router.post('/manageProject', [authenticateToken], masterController.addProject)
router.delete('/deleteProject/:id',  [authenticateToken], masterController.deleteDataproject)


router.get('/getProjecttype',  [authenticateToken], masterController.getDataProjecttype)
router.post('/manageProjecttype', [authenticateToken], masterController.addProjectType)
router.delete('/deleteProjecttype/:id',  [authenticateToken], masterController.deleteDataProjectType)



module.exports = router;