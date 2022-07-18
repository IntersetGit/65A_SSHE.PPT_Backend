const { mode } = require('crypto-js')
const uuid = require('uuid')
const models = require('../models')
const util = require('../util')


exports.CompanyAddService = async (model, user , transaction) => {
    const id = uuid.v4()
    await models.ptt_company.create({
        id,
        company_reg_id: model.company_reg_id,
        company_name: model.company_name,
        website: model.website,
        address: model.address,
        email: model.email,
        tel_no: model.tel_no,
        company_type: model.company_type,
        created_date: new Date()
    },
    transaction)
    return id
}

exports._CompanyAddService = async (company, model, transaction) => {
    const id = uuid.v4()
    await models.mas_subcontract.create({
        id,
        subcontract_name : model.company_name,
        company_id : company
    },
    transaction)
}


exports.companySubComService = async (company,subcontract,transaction) => {
    const id = uuid.v4()
    await models.ptt_sub_company.create({
        id,
        company_id : company , 
        subcontract_id : subcontract 
    },
    transaction)
    return id
}



exports.CompanyEditService = async (model,user) => {
    await models.ptt_company.update({
        company_reg_id: model.company_reg_id,
        company_name: model.company_name,
        website: model.website,
        address: model.address,
        email: model.email,
        tel_no: model.tel_no,
        company_type: model.company_type,
        
    }, { where: {id: model.id}})

    return model.id
}

exports._CompanyEditService = async (model) => {
    await models.mas_subcontract.update({
        subcontract_name: model.company_name,
    }, { where: {company_id: model.id}})

    return model.id
}

exports.companySubEditService =async (model) => {
    await models.ptt_sub_company.update({
        subcontract_id: model.subcontract
    }, { where: {company_id: model.id}})
   
}

exports.CompanyMatchUserService = async (model) => {
    await models.macth_company.create({
        company_id: model.company_id,
        user_id: model.user_id
    })
}


exports.GetAllDataCompanyService = async (search) => {
    let sql = ` select a.id, a.company_reg_id, a.company_name, a.website, a.address, a.email, a.tel_no, a.company_type, a.active, c.subcontract_name , b.subcontract_id,
    a.created_date ,
      (select array(select json_build_object(
        'project_id', project_id,
        'project_name', ptt_data.ptt_projects.project_name
    )  from ptt_data.match_projects  as b INNER JOIN  ptt_data.ptt_projects ON  ptt_data.ptt_projects.id = b.project_id
        WHERE company_id = a.id  )) as project from ptt_data.ptt_company as a 
        LEFT JOIN ptt_data.ptt_sub_company as b ON  b.company_id = a.id
        LEFT JOIN master.mas_subcontract as c ON  c.id = b.subcontract_id `
        

    if (search) sql += ` WHERE a.company_name ILIKE :search_name `

    sql += ` order by a.created_date  asc `

    return util.sequelizeStringLike(sql,{search})
}


exports.GetAllDataSubCompanyService = async () => {
   return  await models.mas_subcontract.findAll({ 
        order: [
        ['subcontract_name', 'ASC'],
    ],})
}

exports.deleteMatchProjectService = async (id) => {
    await models.match_projects.destroy({where: { company_id: id }})
};
exports.deleteMatchCompanyService = async (id) => {
    await models.macth_company.destroy({where: { company_id: id }})
};
;

exports.deleteSubComService = async (id) => {
    await models.ptt_sub_company.destroy({where: { company_id : id }})
};

exports.deleteSubcontractService = async (id) => {
    await models.mas_subcontract.destroy({where: { company_id : id }})
};


exports.deleteCompanyService = async (id) => {
    await models.ptt_company.destroy({ where: { id} })
};