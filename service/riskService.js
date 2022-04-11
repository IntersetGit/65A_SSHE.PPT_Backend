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

