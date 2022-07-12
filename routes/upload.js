const router = require('express').Router();
const uploadControllers = require("../controllers/uploadController");
const { authenticateToken } = require('../middleware/authenticateToken');

router.post('/' , [authenticateToken] ,uploadControllers.uploads);

module.exports = router;