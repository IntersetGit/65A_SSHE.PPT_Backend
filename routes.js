const router = require("express").Router()

router.use('/',require('./routes/index'));
router.use('/provider', require('./routes/provider'));


module.exports = router;