const util = require('../util')
const { AddActivityService, BulkCreateActivityService, GetDataActivityService } = require('../service/mas_activities');
const result = require('../middleware/result');

exports.AddActivityController = async (req, res, next) => {
    try {
          const data = req.body
          const _addActivitiy = await AddActivityService( data , req.user.sysm_id)
          result(res, req, '-', _addActivitiy )

    } catch (error) {
        next(error);
    }
}