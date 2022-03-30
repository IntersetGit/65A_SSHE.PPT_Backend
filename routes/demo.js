const router = require("express").Router();
const { demoLdap } = require("../controllers/demoControllers");
const { authenticateToken } = require("../middleware/authenticateToken");
const result = require("../middleware/result");

router.post("/demoLdap", [authenticateToken], demoLdap);



module.exports = router;
