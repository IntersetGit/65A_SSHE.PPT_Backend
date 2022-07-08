const models = require('../models/index')
const { sequelizeStringFindOne } = require('../util')
const uuidv4 = require("uuid");





/* เพิ่ม ตารางข้อมูลส่วนตัวผู้ใช้งานระบบ */
exports.createProfileUser = async (model, transaction) => {
    const id = model.id ?? uuidv4.v4();
    const _model = {
        id,
        user_id: model.user_id,
    }
    if (model.first_name) _model.first_name = model.first_name
    if (model.last_name) _model.last_name = model.last_name
    if (model.initials) _model.initials = model.initials
    if (model.e_mail) _model.e_mail = model.e_mail
    if (model.company) _model.company = model.company
    if (model.department) _model.department = model.department
    if (model.office) _model.office = model.office
    if (model.phone) _model.phone = model.phone
    if (model.address) _model.address = model.address
    if (model.company_id) _model.company_id = model.company_id
    if (model.description) _model.description = model.description
    if (model.updated_by) _model.updated_by = model.updated_by
    if (model.updated_date) _model.updated_date = new Date()

    await models.ptt_profile_users.create(_model, { transaction });
    return id
}

exports.matchCompanyUser = async (model, transaction) => {
    const match = {
          company_id : model.company_id,
          user_id : model.user_id
    }
   
    await models.macth_company.create( match ,{ transaction });
    return match  
}

exports.matchProjectUser = async (model , transaction) => {
    const match = {
        user_id :  model.user_id,
        project_id : model.project_id
  }

  await models.match_userPro.create( match ,{ transaction });
    return match 

}


/* แก้ไข ตารางข้อมูลส่วนตัวผู้ใช้งานระบบ */
exports.updateDatProfileUsersService = async (model, transaction) => {
    const _model = {
        update_date: new Date(),
    }
    if (model.user_id) _model.user_id = model.user_id
    if (model.first_name) _model.first_name = model.first_name
    if (model.last_name) _model.last_name = model.last_name
    if (model.initials) _model.initials = model.initials
    if (model.e_mail) _model.e_mail = model.e_mail
    if (model.company) _model.company = model.company
    if (model.department) _model.department = model.department
    if (model.office) _model.office = model.office
    if (model.phone) _model.phone = model.phone
    if (model.address) _model.address = model.address
    if (model.company_id) _model.company_id = model.company_id
    if (model.description) _model.description = model.description
    if (model.update_by) _model.update_by = model.update_by

    await models.ptt_profile_users.update(_model, { where: { user_id: model.user_id }, transaction });
    return model.user_id;
}

exports.editMatchCompanyUser = async (dataUser, transaction) => {
    const match = {
          company_id : dataUser.company_id,
          user_id : dataUser.user_id
    }
    await models.macth_company.update( match ,{ where: { user_id: dataUser.user_id }, transaction });
    return dataUser.user_id;  
}

exports.editMatchProjectUser = async (dataUser, transaction) => {
    const match = {
          user_id : dataUser.user_id,
          project_id : dataUser.project_id
    }
    await models.match_userPro.update( match ,{ where: { user_id: dataUser.user_id }, transaction });
    return dataUser.user_id;  
}

