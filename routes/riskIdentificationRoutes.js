const router = require('express').Router();
const { 
    getriskIdentificationController, 
    addImpactController, 
    addActivityController, 
    addProceduresController, 
    addMitigationController, 
    updateActivities, 
    importXlxsRiskIdentificationController,
    updateImpact,
    updateMitigation,
    updateProcedures,
    deleteDataActivity,
    deleteDataImpact,
    deleteDataMitigation,
    deleteDataProcedures,
    addTemplate,
    getDataActivity,
    getDataImpact,
    getDataMitigation,
    getDataProcedures} = require("../controllers/riskController");
const { authenticateToken } = require('../middleware/authenticateToken');


// router.get('/getdata/risk', [authenticateToken], getriskIdentificationController);
router.get('/getActivitice', [authenticateToken], getDataActivity);
router.get('/getImpact', [authenticateToken], getDataImpact);
router.get('/getMitigation', [authenticateToken], getDataMitigation);
router.get('/getProcedures', [authenticateToken], getDataProcedures);


router.post('/addActivitice', [authenticateToken], addActivityController);
router.post('/addImpact', [authenticateToken], addImpactController);
router.post('/addMitigation', [authenticateToken], addMitigationController);
router.post('/addProcedures', [authenticateToken], addProceduresController);
router.post('/importRisk/xlsx', [authenticateToken], importXlxsRiskIdentificationController)

router.post('/updateActivites', [authenticateToken], updateActivities);
router.post('/updateImpact', [authenticateToken], updateImpact);
router.post('/updateMitigation', [authenticateToken], updateMitigation);
router.post('/updateProcedures', [authenticateToken], updateProcedures);

router.delete('/deleteActivites/:id', [authenticateToken], deleteDataActivity);
router.delete('/deleteImpact/:id', [authenticateToken], deleteDataImpact);
router.delete('/deleteMitigation/:id', [authenticateToken], deleteDataMitigation);
router.delete('/deleteProcedures/:id', [authenticateToken], deleteDataProcedures);
//--------------------------- หน้า template -----------------------//
router.post('/addTemplate', [authenticateToken], addTemplate);




module.exports = router;



