const router = require('express').Router();
const { getriskIdentification} = require("../controllers/riskControllers");
const { authenticateToken } = require('../middleware/authenticateToken');


router.get('/getdata', [authenticateToken], getriskIdentification);

module.exports = router;



