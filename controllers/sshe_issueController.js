const util = require('../util')
const { AddSsheIssue,GetAllDataSsheIssueService,updateSsheIssue,deleteSsheIssueService,checkImgById } = require('../service/sshe_issueservice');
const {uploads} = require('../controllers/uploadController')
const result = require('../middleware/result');


exports.addDataSsheIsue = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model  = req.body
        result(res, req, 'เพิ่มข้อมูลsshe issue',await AddSsheIssue( model,user ))

    } catch (error) {
        next(error);
    }
}


exports.getDataSsheIssue = async (req, res, next) => {
    try {
        const { status , primary_case , date } = req.query
       
        const start_date = undefined
        const end_date = undefined

        if (date) {
            if (typeof(date) === 'array') {
                start_date = date[0]
                end_date = date[1]
            }else{
                start_date = date
            }
        }
        const group =  await GetAllDataSsheIssueService( status , primary_case , start_date , end_date )

        for (let i = 0; i < group.length ; i++){
             const img = await checkImgById( group[i].id ,'images_Before')
             result(res, req, 'ค้นหาด้วยชื่อและเรียกข้อมูล Sshe Issue', img  )
       } 


        // result(res, req, 'ค้นหาด้วยชื่อและเรียกข้อมูล Sshe Issue',  )

    } catch (error) {
        next(error);
    }

}


exports.updateDataSsheIsue = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model  = req.body
        result(res, req, 'แก้ไขข้อมูลsshe issue', await updateSsheIssue( model,user ))
    } catch (error) {
        next(error);
    }
}




exports.deleteDataSsueIssue = async (req, res, next) => {
    try {
        const { id } = req.params
        await deleteSsheIssueService(id)
        result(res, req, 'ลบข้อมูลSshe Issue', true)
    } catch (error) {
        next(error);
    }
}


