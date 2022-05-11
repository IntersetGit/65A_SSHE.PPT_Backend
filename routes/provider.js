const router = require('express').Router();
const { loginControllers, refreshTokenControllers,getUserController,getSearchUserController, loginAD, updatePassWordUser} = require("../controllers/providerControllers");
const { authenticateToken } = require('../middleware/authenticateToken');
const result = require('../middleware/result');


/* GET users listing. */
router.post('/login', loginControllers);
router.post('/editpassword',[authenticateToken], updatePassWordUser);
router.get('/refreshToken', refreshTokenControllers);
router.post('/getSearchUser', [authenticateToken], getSearchUserController);


module.exports = router;