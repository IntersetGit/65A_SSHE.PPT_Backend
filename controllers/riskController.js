const models = require('../models')
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
        const { activities_id } = req.body;
        const getDataRisk = await risksearch(activities_id)

        result(res, req, 'เรียกข้อมูล Master Risk Identification', getDataRisk)
    } catch (error) {
        next(error)
    }

}

exports.addActivitieController = async (req, res, next) => {
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

exports.addProcedures = async (req, res, next) => {
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


exports.updateActivities = async (req, res, next) => {
    try {
        const data = req.body;
        const _updateActivities = await updateDataActivities(data, req.user.sysm_id)

        result(res, req, '-', _updateActivities)
    } catch (error) {
        next(error)
    }

}




