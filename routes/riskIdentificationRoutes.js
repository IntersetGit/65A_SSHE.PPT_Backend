const router = require('express').Router();
const { 
    getriskIdentificationController, 
    addImpactController, 
    addActivityController, 
    addProceduresController, 
    addMitigationController, 
    updateActivities, 
    importXlxsRiskIdentificationController} = require("../controllers/riskController");
const { authenticateToken } = require('../middleware/authenticateToken');


router.get('/getdata/risk', [authenticateToken], getriskIdentificationController);
router.post('/addActivitice', [authenticateToken], addActivityController);
router.post('/addImpact', [authenticateToken], addImpactController);
router.post('/addMitigation', [authenticateToken], addMitigationController);
router.post('/addProcedures', [authenticateToken], addProceduresController);
router.post('/importRisk/xlsx', [authenticateToken], importXlxsRiskIdentificationController)

router.post('/updateActivites', [authenticateToken], updateActivities);

module.exports = router;



