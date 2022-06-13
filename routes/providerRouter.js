const router = require('express').Router();
const { loginControllers, refreshTokenControllers, updatePassWordUser,getSearchUserController} = require("../controllers/providerControllers");
const { authenticateToken } = require('../middleware/authenticateToken');


/* GET users listing. */
router.post('/login',[authenticateToken], loginControllers);
router.post('/editpassword',[authenticateToken], updatePassWordUser);
router.get('/refreshToken', [authenticateToken],refreshTokenControllers);
router.get('/getSearchUser',[authenticateToken], getSearchUserController);


module.exports = router;