const { sequelizeString } = require('../util/index')
const models = require('../models')
const messages = require('../messages/index')
const result = require('../middleware/result')
const { sequelize } = require('../models/index')
const {risksearch} = require('../service/riskService')



exports.getriskIdentification = async(req,res,next) => {
    try {
        const { activities_id } = req.body;
        const getDataRisk = await risksearch(activities_id)

        result(res, getDataRisk)
    } catch (error) {
        next(error)
    }

}




