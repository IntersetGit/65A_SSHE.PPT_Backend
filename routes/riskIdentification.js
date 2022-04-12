const router = require('express').Router();
const { getriskIdentification,addImpact,addActivitie, addProcedures,addMitigation} = require("../controllers/riskControllers");
const { authenticateToken } = require('../middleware/authenticateToken');


router.get('/getdata', [authenticateToken], getriskIdentification);
router.post('/addActivitice', [authenticateToken], addActivitie);
router.post('/addImpact', [authenticateToken], addImpact);
router.post('/addMitigation', [authenticateToken], addMitigation);
router.post('/addProcedures', [authenticateToken], addProcedures);

module.exports = router;



