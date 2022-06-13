const router = require('express').Router();
const { loginControllers, refreshTokenControllers, updatePassWordUser,getSearchUserController} = require("../controllers/providerControllers");
const { authenticateToken } = require('../middleware/authenticateToken');


/* GET users listing. */
router.post('/login', loginControllers);
router.post('/editpassword',[authenticateToken], updatePassWordUser);
router.get('/refreshToken', refreshTokenControllers);
router.get('/getSearchUser', getSearchUserController);


module.exports = router;