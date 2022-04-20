const router = require('express').Router();
const { getriskIdentification,addImpact,addActivitie, addProcedures,addMitigation,updateActivities} = require("../controllers/riskControllers");
const { authenticateToken } = require('../middleware/authenticateToken');


router.get('/getdata', [authenticateToken], getriskIdentification);
router.post('/addActivitice', [authenticateToken], addActivitie);
router.post('/addImpact', [authenticateToken], addImpact);
router.post('/addMitigation', [authenticateToken], addMitigation);
router.post('/addProcedures', [authenticateToken], addProcedures);

router.post('/updateActivites', [authenticateToken], updateActivities);

module.exports = router;



