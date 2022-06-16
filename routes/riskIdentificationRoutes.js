const router = require('express').Router();
const { 
    getriskIdentificationController, 
    addImpactController, 
    addActivitieController, 
    addProcedures, 
    addMitigationController, 
    updateActivities } = require("../controllers/riskController");
const { authenticateToken } = require('../middleware/authenticateToken');


router.get('/getdata/risk', [authenticateToken], getriskIdentificationController);
router.post('/addActivitice', [authenticateToken], addActivitieController);
router.post('/addImpact', [authenticateToken], addImpactController);
router.post('/addMitigation', [authenticateToken], addMitigationController);
router.post('/addProcedures', [authenticateToken], addProcedures);
router.post('/importRisk/xlsx', [authenticateToken], )

router.post('/updateActivites', [authenticateToken], updateActivities);

module.exports = router;



