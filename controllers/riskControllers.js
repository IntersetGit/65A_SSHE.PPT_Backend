const { sequelizeString } = require('../util/index')
const models = require('../models')
const messages = require('../messages/index')
const result = require('../middleware/result')
const { sequelize } = require('../models/index')
const {risksearch,addDataActivities,addDataImpact,addDataMitigation,addDataProcedures} = require('../service/riskService')



exports.getriskIdentification = async(req,res,next) => {
    try {
        const { activities_id } = req.body;
        const getDataRisk = await risksearch(activities_id)

        result(res, getDataRisk)
    } catch (error) {
        next(error)
    }

}

exports.addActivitie = async(req,res,next) => {
    try {
        const { name } = req.body;
        const _addActivities = await addDataActivities(name , req.user.sysm_id)

        result(res, _addActivities)
    } catch (error) {
        next(error)
    }

}

exports.addImpact = async(req,res,next) => {
    try {
        const  data  = req.body;
        const _addImpact = await addDataImpact( data , req.user.sysm_id)

        result(res, _addImpact)
    } catch (error) {
        next(error)
    }

}

exports.addMitigation = async(req,res,next) => {
    try {
        const  data  = req.body;
        const _addMitigation = await addDataMitigation( data , req.user.sysm_id)

        result(res, _addMitigation)
    } catch (error) {
        next(error)
    }

}

exports.addProcedures = async(req,res,next) => {
    try {
        const  data  = req.body;
        const _addProcedures = await addDataProcedures( data , req.user.sysm_id)

        result(res, _addProcedures)
    } catch (error) {
        next(error)
    }

}




