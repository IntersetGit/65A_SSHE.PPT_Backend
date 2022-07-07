const util = require('../util')
const { AddSsheIssue } = require('../service/sshe_issueservice');
const result = require('../middleware/result');


exports.addDataSsheIsue = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model  = req.query
        result(res, req, 'เพิ่มข้อมูลsshe issue', await AddSsheIssue(model,user))

    } catch (error) {
        next(error);
    }
}


