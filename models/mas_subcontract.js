const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_subcontract', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    subcontract_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ชื่อบริษัท subcontract"
    },
    company_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสเชื่อมตารางบริษัท",
      references: {
        model: 'ptt_company',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'mas_subcontract',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "mas_subcontract_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
