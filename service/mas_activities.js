const models = require('../models/index');
const uuid = require('uuid');
const { sequelizeString, sequelizeStringFindOne, sequelizeStringLike } = require("../util/index")

exports.AddActivityService = async (data) => {
    const id = uuid.v4();
    await models.master_activities.create({
        id,
        code_id: data.code_id,
        name: data.name,
        description: data.description,
        isuse: 1,
        created_by: user.sysm_id,
        created_date: new Date(),
    })
    return id
}

exports.GetDataActivityService = async () => {
    return await models.master_activities.findAll()
}

exports.BulkCreateActivityService = async (model) => {
    await models.master_activities.bulkCreate(model)
}



// ---------- company ------------//
exports.GetAllDataCompany = async () => {
    return await models.ptt_company.findAll()
}

exports.GetSearchDataCompany = async (search) => {
    let sql = ` select * from ptt_data.ptt_company `
  
    if (search) sql += ` WHERE company_name ILIKE :search_name `
  
    return sequelizeStringLike(sql, {search})
}

exports.createCompany = async (data) => {
    const id = uuid.v4()
    const createDataCompany = await models.ptt_company.create({
        id,
        company_reg_id : data.reg_id, 
        company_name : data.name,
        website : data.website, 
        address : data.address, 
        email : data.email,
        tel_no : data.tel_no,
        company_type : data.type      
    })
    return createDataCompany
}

exports.updateCompany = async (data) => {
    const updateDataCompany = await models.ptt_company.update({
        company_reg_id : data.reg_id, 
        company_name : data.name,
        website : data.website, 
        address : data.address, 
        email : data.email,
        tel_no : data.tel_no,
        company_type : data.type 
      },{
            where: { id: data.id }
          })
    return updateDataCompany
}

exports.deleteCompany = async (data) => {
    const deleteDataCompany = await models.ptt_company.destroy({ where: { id: data.id } })
    return deleteDataCompany;
  };
