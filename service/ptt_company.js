const { mode } = require('crypto-js')
const uuid = require('uuid')
const models = require('../models')
const util = require('../util')


exports.CompanyAddService = async (model, transaction) => {
       const _model = {
            id,
            company_reg_id: model.company_reg_id,
            company_name: model.company_name,
            website: model.website,
            address: model.address,
            email: model.email,
            tel_no: model.tel_no,
            company_type: model.company_type,
            active : model.active
}
if (model.subcontract_com) _model.subcontract_com = model.subcontract_com
await models.ptt_company.create(_model, { transaction });
return id
}




exports.CompanyEditService = async (model) => {
    const _model = {
        id,
        company_reg_id: model.company_reg_id,
        company_name: model.company_name,
        website: model.website,
        address: model.address,
        email: model.email,
        tel_no: model.tel_no,
        company_type: model.company_type,
        active : model.active
}
if (model.subcontract_com) _model.subcontract_com = model.subcontract_com
await models.ptt_company.update(_model,{ where: { id: model.id } }, { transaction });
return id
}



exports.CompanyMatchUserService = async (model) => {
    await models.macth_company.create({
        company_id: model.company_id,
        user_id: model.user_id
    })
}

exports.GetAllDataCompanyService = async (search) => {
    let sql = ` select * from ptt_data.ptt_company `
    if (search) sql += ` WHERE company_name ILIKE :search_name
 `
    sql += ` order by company_name asc `
    return util.sequelizeStringLike(sql, { search })
}

exports.deleteCompanyService = async (id) => {
    await models.ptt_company.destroy({ where: { id} })
};
exports.deleteMatchProjectService = async (id) => {
    await models.match_projects.destroy({where: { company_id: id }})
};