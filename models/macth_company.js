const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('macth_company', {
    company_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสบริษัทผู้รับเหมา",
      primaryKey: true,
      references: {
        model: 'ptt_company',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสผู้รับเหมา",
      primaryKey: true,
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'macth_company',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "fki_fk_comp_company_id",
        fields: [
          { name: "company_id" },
        ]
      },
      {
        name: "fki_fk_comp_user_id",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "macth_company_pkey",
        unique: true,
        fields: [
          { name: "company_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
