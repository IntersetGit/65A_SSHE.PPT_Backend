const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('match_userPro', {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ptt_projects',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'match_userPro',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "match_userPro_pkey",
        unique: true,
        fields: [
          { name: "project_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
