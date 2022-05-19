const router = require("express").Router()

router.use('/api',require('./routes/index'));
router.use('/api/provider', require('./routes/providerRouter'));
router.use('/api/risk', require('./routes/riskIdentification'));
router.use('/api/master', require('./routes/masterRouter'));
router.use('/api/system', require('./routes/systemRouter'));


module.exports = router;