const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match_userPro', {
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'ptt_projects',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'match_userPro',
    schema: 'ptt_data',
    timestamps: false
  });
};
