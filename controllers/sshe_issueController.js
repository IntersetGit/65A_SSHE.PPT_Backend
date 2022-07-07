const util = require('../util')
const { AddSsheIssue,GetAllDataSsheIssueService,updateSsheIssue } = require('../service/sshe_issueservice');
const result = require('../middleware/result');


exports.addDataSsheIsue = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model  = req.body
        result(res, req, 'เพิ่มข้อมูลsshe issue', await AddSsheIssue( model,user ))

    } catch (error) {
        next(error);
    }
}


exports.getDataSsheIssue = async (req, res, next) => {
    try {
        const { status , issue_type , start_date, end_date } = req.query
        result(res, req, 'ค้นหาด้วยชื่อและเรียกข้อมูล Sshe Issue', await GetAllDataSsheIssueService( status , issue_type , start_date, end_date  ))

    } catch (error) {
        next(error);
    }

}

exports.updateDataSsheIsue = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model  = req.body
        result(res, req, 'เพิ่มข้อมูลsshe issue', await updateSsheIssue( model,user ))

    } catch (error) {
        next(error);
    }
}


