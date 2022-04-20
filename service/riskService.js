const { sequelizeString } = require('../util/index')
const models = require('../models')
const messages = require('../messages/index')
const result = require('../middleware/result')
const { sequelize } = require('../models/index')



// แสดงข้อมูล risk Identification //
exports.risksearch = async(activities_id) => {

    let impact = []
    let mitigation = []
    let Procedures = []

        // ตาราง impact //
        const _impact = await sequelizeString ( `SELECT  name FROM ptt_data.ptt_impact where '${activities_id}' = any(activities_id) `)
        _impact.forEach(({ name }) => {
             impact.push(name);
          })
          //ตาราง mitigation //
        const _mitigation = await sequelizeString ( `SELECT  name FROM ptt_data.ptt_mitigation where '${activities_id}' = any(activities_id) `)
        _mitigation.forEach(({ name }) => {
            mitigation.push(name);
          })
          // ตาราง procedures //
        const _Procedures = await sequelizeString ( `SELECT  name FROM ptt_data.ptt_Procedures where '${activities_id}' = any(activities_id) `)
        _Procedures.forEach(({ name }) => {
            Procedures.push(name);
          })

        return {
            impact,
            mitigation,
            Procedures
        };
     
} ;

// เพื่อข้อมูล Risk Identification //
// ตาราง ativities //
exports.addDataActivities = async(name, user) => {
    const addAcitivities = await models.ptt_activities.create({
        name: name,
        created_by: user ,
        created_date: new Date()
      })
      return addAcitivities
}

exports.addDataImpact = async( data ,user) => {
  if(data.activities_id !== "" && data.activities_id !== "null" ){
    const _addImpact = await sequelizeString ( `INSERT INTO ptt_data.ptt_impact ( name , activities_id , created_by , created_date ) 
    VALUES ('${data.name}','{"${data.activities_id}"}','${user}', CURRENT_TIMESTAMP ) `)
    return _addImpact
  }else{
  const addImpact = await models.ptt_impact.create({
    name : data.name,
    created_by : user,
    created_date : new Date()
    
  })
  return addImpact
}
}

exports.addDataMitigation = async( data ,user) => {
  if(data.activities_id !== "" && data.activities_id !== "null" ){
    const _addMitigation = await sequelizeString ( `INSERT INTO ptt_data.ptt_mitigation ( name , activities_id , created_by , created_date ) 
    VALUES ('${data.name}','{"${data.activities_id}"}','${user}', CURRENT_TIMESTAMP ) `)
    return _addMitigation
  }else{
  const addMitigation = await models.ptt_mitigation.create({
    name : data.name,
    created_by : user,
    created_date : new Date()
    
  })
  return addMitigation
}
}


exports.addDataProcedures = async( data ,user) => {
  if(data.activities_id !== "" && data.activities_id !== "null" ){
    const _addProcedures = await sequelizeString ( `INSERT INTO ptt_data.ptt_procedures ( name , activities_id , created_by , created_date ) 
    VALUES ('${data.name}','{"${data.activities_id}"}','${user}', CURRENT_TIMESTAMP ) `)
    return _addProcedures
  }else{
  const addProcedures = await models.ptt_procedures.create({
    name : data.name,
    created_by : user,
    created_date : new Date()
    
  })
  return addProcedures
}
}

exports.updateDataActivities = async( data , user) => {
  
  const updateRiskActivities = await models.ptt_activities.update({
      name: data.name,
      updated__by: user ,
      updated_date: new Date()
    },{
      where: { id : data.id }
    })
    return data.id
}
