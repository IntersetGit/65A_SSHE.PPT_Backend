const router = require("express").Router()

router.use('/api',require('./routes/index'));
router.use('/api/provider', require('./routes/providerRoutes'));
router.use('/api/risk', require('./routes/riskIdentificationRoutes'));
router.use('/api/master', require('./routes/masterRoutes'));
router.use('/api/system', require('./routes/systemRoutes'));


module.exports = router;