const router = require('express').Router();
const { loginControllers, refreshTokenControllers, updatePassWordUser,getSearchUserController} = require("../controllers/providerController");
const { authenticateToken } = require('../middleware/authenticateToken');


/* GET users listing. */
router.post('/login', loginControllers);
router.post('/editpassword',[authenticateToken], updatePassWordUser);
router.get('/refreshToken',refreshTokenControllers);
router.get('/getSearchUser',[authenticateToken], getSearchUserController);


module.exports = router;