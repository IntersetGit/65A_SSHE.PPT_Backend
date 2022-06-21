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
    deleteDataProcedures} = require("../controllers/riskController");
const { authenticateToken } = require('../middleware/authenticateToken');


router.get('/getdata/risk', [authenticateToken], getriskIdentificationController);

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



module.exports = router;



