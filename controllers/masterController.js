const util = require('../util')
const { CompanyEditService, CompanyAddService, deleteCompanyService, GetAllDataCompanyService,GetAllDataSubCompanyService, _CompanyEditService,deleteSubcontractService,deleteMatchProjectService,deleteMatchCompanyService,_CompanyAddService,companySubComService,companySubEditService,deleteSubComService } = require('../service/ptt_company.js');
const { GetAllDataProjectService,projectAddService,projectEditService,deleteProjectService,projecctMatchUserEditService,projecctMatchUserService,projecctMatchUserDeleteService} = require('../service/ptt_project');
const { GetAllDataProjectTypeService,projectTypeAddService,projectTypeEditService,deleteProjectTypeService} = require('../service/mas_project_type');
const { GetAllDataIssueTypeService,deleteIssueTypeService,issueTypeAddService,issueTypeEditService } = require('../service/mas_issue_type');
const { GetAllDataHazardIssueService,deleteHazardIssueService,hazardIssueAddService,hazardIssueEditService } = require('../service/ptt_hazard_issue');
const { GetAllDataIncidentTypeService,incidentTypeAddService,incidentTypeEditService,deleteIncidentTypeService } = require('../service/mas_incident_type');
const {GetAllDataConsequenceService,consquenceAddService,consquenceEditService,deleteConsqeuenceService} = require('../service/consequence')
const {GetAllDataLikeHoodService,likeHoodAddService,likeHoodEditService,deleteLikeHoodService} = require('../service/Likehood')
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

exports.getDataSubCompany = async (req, res, next) => {
    try {
        result(res, req, ' เรียกข้อมูล subcontract ', await GetAllDataSubCompanyService())

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
            await CompanyEditService(model,user)
            await _CompanyEditService(model)
            if(model.subcontract){
            await companySubEditService(model)
            }
            result(res, req, 'แก้ไขข้อมูลบริษัท', true, 201)

        } else {
            const company =  await CompanyAddService(model)
            const subcontract = await _CompanyAddService(company,model)
            if(model.subcontract){
                 await companySubComService(company,model.subcontract)
                }
            result(res, req, 'เพิ่มข้อมูลบริษัท', company , 201)
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
        await deleteMatchProjectService(id)
        await deleteMatchCompanyService(id)
        await deleteSubComService(id)
        await deleteSubcontractService(id)
        await deleteCompanyService(id)
        result(res, req, 'ลบข้อมูลบริษัท', true)

    } catch (error) {
        next(error);
    }
}






//--------- projeect------


exports.getDataProject = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { search } = req.query
        result(res, req, 'ค้นหาด้วยชื่อโครงการและเรียกข้อมูลโครงการ', await GetAllDataProjectService(search))

    } catch (error) {
        next(error);
    }
}

exports.addProject = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model = req.body

        if (model.id) {
            await projectEditService(model)
            if (model.company_id){
            await projecctMatchUserDeleteService(model.id)
            for (let i = 0; i < model.company_id.length; i++ ) {
                await projecctMatchUserEditService (model.id,model.company_id[i])
                }}
            
            result(res, req, 'แก้ไขข้อมูลโครงการ',true, 201)
        } else {
           const c =  await projectAddService(model)
           if(model.company_id){
           for (let i = 0; i < model.company_id.length; i++ ) {
                await projecctMatchUserService(c,model.company_id[i])
            }}
            result(res, req, 'เพิ่มข้อมูลโครงการ', c ,  201)
        } 

    } catch (error) {
        next(error)
    }
}

exports.deleteDataproject = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { id } = req.params
        await projecctMatchUserDeleteService(id)
        await deleteProjectService(id)
        result(res, req, 'ลบข้อมูลโครงการ', true)

    } catch (error) {
        next(error);
    }
}

//-------------- project type --------------------------------------//
exports.getDataProjecttype = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { search } = req.query
        result(res, req, 'ค้นหาประเภทของโครงการด้วยชื่อและค้นหาประเภทโครงการทั้งหมด', await GetAllDataProjectTypeService(search))

    } catch (error) {
        next(error);
    }
}

exports.addProjectType = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model = req.body

        if (model.id ) {
            await projectTypeEditService( user ,model)
            result(res, req, 'แก้ไขข้อมูลประเภทโครงการ',true, 201)
        } else {
            result(res, req, 'เพิ่มข้อมูลประเภทโครงการ',await projectTypeAddService(user,model),  201)
        } 

    } catch (error) {
        next(error)
    }
}

exports.deleteDataProjectType = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { id } = req.params
        await deleteProjectTypeService(id)
        result(res, req, 'ลบข้อมูลประเภทโครงการ', true)

    } catch (error) {
        next(error);
    }
}


//-------------- issue type --------------------------------------//
exports.getDataIssueType = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { search } = req.query
        result(res, req, 'ค้นหาissue type กับ แสดง issue type', await GetAllDataIssueTypeService(search))

    } catch (error) {
        next(error);
    }
}

exports.addIssueType = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model = req.body

        if (model.id ) {
            await issueTypeEditService( user ,model)
            result(res, req, 'แก้ไขข้อมูล issuetype ',true, 201)
        } else {
            result(res, req, 'เพิ่มข้อมูล issuetype ',await issueTypeAddService(user,model),  201)
        } 

    } catch (error) {
        next(error)
    }
}

exports.deleteDataIssueType = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { id } = req.params
        await deleteIssueTypeService(id)
        result(res, req, 'ลบข้อมูลissuetype', true)

    } catch (error) {
        next(error);
    }
}


//------------------------------ hazard issue --------------------------------------//
exports.getDataHazardIssue = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { search } = req.query
        result(res, req, 'ค้นหาissue type กับ แสดง issue type', await GetAllDataHazardIssueService(search))

    } catch (error) {
        next(error);
    }
}

exports.addHazardIssue = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model = req.body

        if (model.id ) {
            await hazardIssueEditService( user ,model)
            result(res, req, 'แก้ไขข้อมูล issuetype ',true, 201)
        } else {
            result(res, req, 'เพิ่มข้อมูล issuetype ',await hazardIssueAddService(user,model),  201)
        } 

    } catch (error) {
        next(error)
    }
}

exports.deleteDataHazardIssue = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { id } = req.params
        await deleteHazardIssueService(id)
        result(res, req, 'ลบข้อมูลissuetype', true)

    } catch (error) {
        next(error);
    }
}

//------------------------------ incident type-------------------------------------//
exports.getDataIncidentType = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { search } = req.query
        result(res, req, 'ค้นหาissue type กับ แสดง issue type', await GetAllDataIncidentTypeService(search))

    } catch (error) {
        next(error);
    }
}

exports.addIncidentType = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model = req.body

        if (model.id ) {
            await incidentTypeEditService( user ,model)
            result(res, req, 'แก้ไขข้อมูล issuetype ',true, 201)
        } else {
            result(res, req, 'เพิ่มข้อมูล issuetype ',await incidentTypeAddService(user,model),  201)
        } 

    } catch (error) {
        next(error)
    }
}

exports.deleteDataIncidentType = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { id } = req.params
        await deleteIncidentTypeService(id)
        result(res, req, 'ลบข้อมูลissuetype', true)

    } catch (error) {
        next(error);
    }
}

//-------------------- consequence ------------------------------------------------//

exports.getDataConsequence = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { search } = req.query
        result(res, req, 'ค้นหา Consequence กับ แสดง Consequence', await GetAllDataConsequenceService(search))

    } catch (error) {
        next(error);
    }
}

exports.addConsequence = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model = req.body

        if (model.id ) {
            await consquenceEditService( user ,model)
            result(res, req, 'แก้ไขข้อมูล consquence ',true, 201)
        } else {
            result(res, req, 'เพิ่มข้อมูล consquence ',await consquenceAddService(user,model),  201)
        } 

    } catch (error) {
        next(error)
    }
}


exports.deleteDataConsqeuence = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { id } = req.params
        await deleteConsqeuenceService(id)
        result(res, req, 'ลบข้อมูล consqeuence', true)

    } catch (error) {
        next(error);
    }
}


//--------------------------- likehood ------------------------------------------//

exports.getDataLikeHood = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { search } = req.query
        result(res, req, 'ค้นหา likehood กับ แสดง Likehood ', await GetAllDataLikeHoodService(search))

    } catch (error) {
        next(error);
    }
}

exports.addLikeHood = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const model = req.body

        if (model.id ) {
            await likeHoodEditService( user ,model)
            result(res, req, 'แก้ไขข้อมูล consquence ',true, 201)
        } else {
            result(res, req, 'เพิ่มข้อมูล consquence ',await likeHoodAddService(user,model),  201)
        } 

    } catch (error) {
        next(error)
    }
}


exports.deleteDataLikeHood = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { id } = req.params
        await deleteLikeHoodService(id)
        result(res, req, 'ลบข้อมูล consqeuence', true)

    } catch (error) {
        next(error);
    }
}