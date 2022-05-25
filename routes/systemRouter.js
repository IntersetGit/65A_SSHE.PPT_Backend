const systemControllers = require('../controllers/systemControllers');
const { authenticateToken } = require('../middleware/authenticateToken');

const router = require('express').Router();

/* เพิ่มผู้ใช้งานใน ad */
router.post('/addUserAD', [authenticateToken], systemControllers.createUserAD);
/* แก้ไขสิทธิ์ ผู้ใช้งาน */
router.put('/updateRoleUser', [authenticateToken], systemControllers.updateRoleUser);
/* ค้นหาผู้ใชช้ ad */
router.get('/findUserAD', [authenticateToken], systemControllers.findUserAd);
/* ลบผู้ใช้งาน */
router.post('/delUserAD/:id', [authenticateToken], systemControllers.delUserAd);
/* อัพข้อมูลการตั้งค่า ad */ 
router.post('updateConfig', [authenticateToken], systemControllers.updateConfigAd);

// เรียกข้อมูลสิทธ์ผู้ใช้งาน
router.get('/getUser',[authenticateToken], systemControllers.getSysmRoleController);
/* */
router.put('/editUser', [authenticateToken], systemControllers.editUser);
router.get('/user/info', [authenticateToken], systemControllers.GetUserController)

module.exports = router;