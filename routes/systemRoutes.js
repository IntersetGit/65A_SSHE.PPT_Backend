const systemControllers = require('../controllers/systemController');
const { authenticateToken } = require('../middleware/authenticateToken');

const router = require('express').Router();

/* เพิ่มผู้ใช้งานใน ad */
router.post('/addUserAD',[authenticateToken],systemControllers.createUserAD);
/* แก้ไขสิทธิ์ ผู้ใช้งาน */
router.put('/updateRoleUser', [authenticateToken], systemControllers.updateRoleUser);
/* ลบผู้ใช้งาน */
router.get('/delUserAD/:id', [authenticateToken], systemControllers.delUserAd);
/* อัพข้อมูลการตั้งค่า ad */ 
router.post('updateConfig', [authenticateToken], systemControllers.updateConfigAd);
router.put('/editUser', [authenticateToken],systemControllers.editUser);



router.get('/roles', [authenticateToken], systemControllers.GetRolesController);
router.get('/users/info', [authenticateToken], systemControllers.GetUserController);
router.get('/users/info/:id', [authenticateToken], systemControllers.GetUserProjectController);
router.get('/search/user/ad', [authenticateToken], systemControllers.SearchAd);



module.exports = router;