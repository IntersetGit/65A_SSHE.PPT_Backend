const { sequelizeString } = require('../util/index')
const models = require('../models')
const messages = require('../messages/index')
const result = require('../middleware/result')
const { sequelize } = require('../models/index')









exports.updateDataActivities = async( data , user) => {
  
  const updateRiskActivities = await models.mas_activities.update({
      name: data.name,
      description : data.description,
      isuse: data.isuse,
      name_thai : data.name_thai,
      updated__by: user.sysm_id,
      updated_date: new Date()
    },{
      where: { id : data.id }
    })
    return data.id
}


exports.updateDataImpact = async( data , user) => {
  
  const updateRiskImpact = await models.mas_impacts.update({
      name: data.name,
      description: data.description,
      isuse: data.isuse,
      name_thai : data.name_thai,
      updated__by: user.sysm_id ,
      updated_date: new Date()
    },{
      where: { id : data.id }
    })
    return data.id
}


exports.updateDataMitigation = async( data , user) => {
  
  const updateRiskMitigation = await models.mas_mitigations.update({
      name: data.name,
      description: data.description,
      isuse: data.isuse,
      name_thai : data.name_thai,
      impact_id: data.impact_id,
      updated__by: user.sysm_id ,
      updated_date: new Date()
    },{
      where: { id : data.id }
    })
    return data.id
}

exports.updateDataProcedures = async( data , user) => {
  
  const updateRiskProcedures = await models.mas_procedures.update({
      name: data.name,
      description: data.description,
      isuse: data.isuse,
      name_thai : data.name_thai,
      impact_id: data.impact_id,
      updated__by: user.sysm_id ,
      updated_date: new Date()
    },{
      where: { id : data.id }
    })
    return data.id
}

exports.deleteActivityService = async (id) => {
  await models.mas_activities.destroy({ where: { id : id} })
};
exports.deleteImpactService = async (id) => {
  await models.mas_impacts.destroy({ where: { id : id} })
};
exports.deleteMitigationService = async (id) => {
  await models.mas_mitigations.destroy({ where: { id : id} })
};
exports.deleteProceduresService = async (id) => {
  await models.mas_procedures.destroy({ where: { id : id} })
};