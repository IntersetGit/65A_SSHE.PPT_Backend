const router = require("express").Router()

router.use('/',require('./routes/index'));
router.use('/provider', require('./routes/providerRouter'));
router.use('/risk', require('./routes/riskIdentification'));
router.use('/master', require('./routes/masterRouter'));


module.exports = router;