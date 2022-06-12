const util = require('../util')
const { AddActivityService, BulkCreateActivityService, GetDataActivityService,GetAllDataCompany,GetSearchDataCompany,createCompany,updateCompany,deleteCompany} = require('../service/mas_activities');
const result = require('../middleware/result');

// exports.AddActivityController = async (req, res, next) => {
//     try {
//           const data = req.body
//           const _addActivitiy = await AddActivityService( data , req.user.sysm_id)
//           result(res, req, '-', _addActivitiy )

//     } catch (error) {
//         next(error);
//     }
// }


exports.getDataCompany = async (req, res, next) => {
    try {
          const  _getDataCompany = await GetAllDataCompany( )
          result(res, req, 'แสดงข้อมูลบริษัท', _getDataCompany )

    } catch (error) {
        next(error);
    }
}
//---------- ค้นหาด้วยชื่อ--------//
exports.getSearchCompany = async (req, res, next) => {
    try {
          const {search } = req.query
          const  _getSearchCompany = await GetSearchDataCompany(search)
          result(res, req, 'ค้นหาด้วยชื่อบริษัท', _getSearchCompany  )

    } catch (error) {
        next(error);
    }
}

exports.addCompany = async (req, res, next) => {
    try {
          const  data  = req.body
          const  addDataCompany = await createCompany(data)
          result(res, req, 'เพิ่มข้อมูลบริษัท', addDataCompany  )

    } catch (error) {
        next(error);
    }
}

exports.editDataCompany = async (req, res, next) => {
    try {
          const  data  = req.body
          const  editCompany = await updateCompany(data)
          result(res, req, 'แก้ไขข้อมูลบริษัท', editCompany  )

    } catch (error) {
        next(error);
    }
}

exports.deleteDataCompany = async (req, res, next) => {
    try {
          const  data  = req.body
          const  _deleteCompany = await deleteCompany(data)
          result(res, req, 'ลบข้อมูลบริษัท', _deleteCompany  )

    } catch (error) {
        next(error);
    }
}