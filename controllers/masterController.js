const util = require('../util')
const { CompanyEditService, CompanyAddService, deleteCompanyService, GetAllDataCompanyService } = require('../service/ptt_company');
const result = require('../middleware/result');

// exports.AddActivityController = async (req, res, next) => {
//     try {
//           const data = req.body
//           const _addActivitiy = await AddActivityService( data , req.user.sysm_id)
//           result(res, req, '-', _addActivitiy )

//     } catch (error) {
//         next(error);
//     }
// }


exports.getDataCompany = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { search } = req.query
        result(res, req, 'ค้นหาด้วยชื่อบริษัทและเรียกข้อมูลบริษัท', await GetAllDataCompanyService(search))

    } catch (error) {
        next(error);
    }
}

exports.addCompany = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model = req.body

        if (model.id) {
            await CompanyEditService(model)
            result(res, req, 'แก้ไขข้อมูลบริษัท', true, 204)
        } else {
            result(res, req, 'เพิ่มข้อมูลบริษัท', await CompanyAddService(model), 201)
        }

    } catch (error) {
        next(error)
    }
}

exports.deleteDataCompany = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { id } = req.params
        await deleteCompanyService(id)
        result(res, req, 'ลบข้อมูลบริษัท', true)

    } catch (error) {
        next(error);
    }
}