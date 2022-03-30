const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_company', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสตารางข้อมูลบริษัท",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "ชื่อบริษัท"
    },
    address: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mas_company',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "mas_company_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
