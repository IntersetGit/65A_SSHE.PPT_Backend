const router = require("express").Router()

router.use('/',require('./routes/index'));
router.use('/provider', require('./routes/provider'));
router.use('/risk', require('./routes/riskIdentification'));


module.exports = router;