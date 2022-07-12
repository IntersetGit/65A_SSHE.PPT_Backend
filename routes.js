const router = require("express").Router()

router.use('/api',require('./routes/index'));
router.use('/api/provider', require('./routes/providerRoutes'));
router.use('/api/risk', require('./routes/riskIdentificationRoutes'));
router.use('/api/incident', require('./routes/incidentRoutes'));
router.use('/api/master', require('./routes/masterRoutes'));
router.use('/api/system', require('./routes/systemRoutes'));
router.use('/api/ssheissue', require('./routes/sshe_issueRouter'));
router.use('/api/upload', require('./routes/upload'));

module.exports = router;