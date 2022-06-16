const readXlsxFile = require('read-excel-file/node')
const fs = require('fs')
const util = require('../util')
const path = require('path')
const uuid = require('uuid')
const messages = require('../messages/index')
const result = require('../middleware/result')
const masActivities = require('../service/mas_activities')
const masImpacts = require('../service/mas_impacts')
const masMitigations = require('../service/mas_mitigations')
const masProcedures = require('../service/mas_procedures')
const { risksearch, addDataActivities, addDataImpact, addDataMitigation, addDataProcedures, updateDataActivities } = require('../service/riskService')

exports.getriskIdentificationController = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token

        result(res, req, 'เรียกข้อมูล Master Risk Identification', {
            activity: await masActivities.GetDataActivityService() ?? [],
            impacts: await masImpacts.GetDataImpactService() ?? [],
            mitigations: await masMitigations.GetDataMitigationsService() ?? [],
            procedures: await masProcedures.GetDataProceduresService() ?? []
        })
    } catch (error) {
        next(error)
    }

}

exports.addActivityController = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { name, description, code_id } = req.body;

        result(res, req, 'เพิ่มข้อมูลกิจกรรมของงาน', await masActivities.AddActivityService({
            code_id,
            name,
            description,
            created_by: user.sysm_id
        }), 201)

    } catch (error) {
        next(error)
    }

}

exports.addImpactController = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { name, description, code_id, activity_id, activity_code } = req.body;

        result(res, req, 'เพิ่มข้อมูลผลกระทบกิจกรรมงาน', await masImpacts.AddImpactService({
            name,
            description,
            code_id,
            activity_id,
            activity_code,
            created_by: user.sysm_id
        }), 201)

    } catch (error) {
        next(error)
    }

}

exports.addMitigationController = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { code_id, name, description, impact_id, impact_code } = req.body;

        result(res, req, 'เพิ่มข้อมูลผลกระทบที่ได้', await masMitigations.AddMitigationsService({
            code_id,
            name,
            description,
            impact_id,
            impact_code,
            created_by: user.sysm_id
        }), 201)

    } catch (error) {
        next(error)
    }

}

exports.addProceduresController = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { code_id, name, description, mitigation_id, mitigation_code } = req.body;

        result(res, req, 'เพิ่มข้อมูลการปฏิบัติงาน', await masProcedures.AddProceduresService({
            code_id, name, description, mitigation_id, mitigation_code, created_by: user.sysm_id
        }), 201)

    } catch (error) {
        next(error)
    }

}

exports.importXlxsRiskIdentificationController = async (req, res, next) => {
    try {
        const decode = await util.decodeToken(req.headers.authorization)
        const user = decode.token
        const { fileImport: excelImport } = req.files
        const isXlsx = excelImport.name.split('.')
        const uploadPath = `${path.resolve("./")}/public/uploads/excel/`
        const namePath = uploadPath + excelImport.md5 + '.xlsx'

        if (isXlsx[isXlsx.length - 1] != 'xlsx') {
            const throwErr = new Error('upload extension .xlxs only')
            throwErr.statusCode = 400
            throw throwErr
        }

        if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath)
        excelImport.mv(namePath, (error) => {
            if (error) {
                const fsErr = new Error(error)
                fsErr.statusCode = 400
                throw fsErr
            }
        })

        const field = []
        const rows = await readXlsxFile(namePath)
        rows.forEach(row => {
            field.push({
                id: uuid.v4(),
                name: row[0],
                description: row[1],
                code_id: row[2],
                isuse: 1,
                created_date: new Date()
            })
        })
        if (field[0].name.toLowerCase() === 'activity') {
            field.shift()
            await masActivities.BulkCreateActivityService(field)
            result(res, req, 'import activity', true, 201)
        }

        if (field[0].name.toLowerCase() === 'impacts' || field[0].name.toLowerCase() === 'impact') {
            field.shift()
            await masActivities.BulkCreateActivityService(field)
            result(res, req, 'import impacts', true, 201)
        }

        if (field[0].name.toLowerCase() === 'mitigations' || field[0].name.toLowerCase() === 'mitigation') {
            field.shift()
            await masActivities.BulkCreateActivityService(field)
            result(res, req, 'import mitigations', true, 201)
        }

        if (field[0].name.toLowerCase() === 'procedures' || field[0].name.toLowerCase() === 'procedure') {
            field.shift()
            await masActivities.BulkCreateActivityService(field)
            result(res, req, 'import procedures', true, 201)
        }


    } catch (error) {
        next(error)
    }
}


exports.updateActivities = async (req, res, next) => {
    try {
        const data = req.body;
        const _updateActivities = await updateDataActivities(data, req.user.sysm_id)

        result(res, req, '-', _updateActivities)
    } catch (error) {
        next(error)
    }

}




