const express = require('express')
const router = express.Router();
const masterController = require('../controllers/masterController')
const { authenticateToken } = require('../middleware/authenticateToken')

// router.post('/addActivity', masterController.AddActivityController);

//-------------- company----------------------------- //
router.get('/getCompany',  [authenticateToken], masterController.getDataCompany)
router.post('/manageCompany', [authenticateToken], masterController.addCompany)
router.delete('/updateCompany/:id',  [authenticateToken], masterController.deleteDataCompany)

//------------------- project-------------------------------------//
router.get('/getProject',  [authenticateToken], masterController.getDataProject)
router.post('/manageProject', [authenticateToken], masterController.addProject)
router.delete('/deleteProject/:id',  [authenticateToken], masterController.deleteDataproject)

//--------------- project type ------------------------------------//
router.get('/getProjecttype',  [authenticateToken], masterController.getDataProjecttype)
router.post('/manageProjecttype', [authenticateToken], masterController.addProjectType)
router.delete('/deleteProjecttype/:id',  [authenticateToken], masterController.deleteDataProjectType)
//----------------------- sshe issue type ----------------------------//
router.get('/getIssueType',  [authenticateToken], masterController.getDataIssueType)
router.post('/manageIssueType', [authenticateToken], masterController.addIssueType)
router.delete('/deleteIssueType/:id',  [authenticateToken], masterController.deleteDataIssueType)
//----------------- hazard issue ------------------------------------------------//
router.get('/getHazardIssue',  [authenticateToken], masterController.getDataHazardIssue)
router.post('/manageHazardIssue', [authenticateToken], masterController.addHazardIssue)
router.delete('/deleteHazardIssue/:id',  [authenticateToken], masterController.deleteDataHazardIssue)
//------------------incident type ------------------------------------------------//
router.get('/getIncidentType',  [authenticateToken], masterController.getDataIncidentType)
router.post('/manageIncidentType', [authenticateToken], masterController.addIncidentType)
router.delete('/deleteIncidentType/:id',  [authenticateToken], masterController.deleteDataIncidentType)


module.exports = router;