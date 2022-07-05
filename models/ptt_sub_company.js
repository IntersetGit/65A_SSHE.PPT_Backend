const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_sub_company', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสบริษัท",
      references: {
        model: 'ptt_company',
        key: 'id'
      }
    },
    subcontract_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสที่บริษัทกำหนดเป็น subcontract ",
      references: {
        model: 'mas_subcontract',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ptt_sub_company',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "ptt_sub_company_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
