const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_company', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสบริษัทผู้รับเหมา",
      primaryKey: true
    },
    company_reg_id: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "เลขรหัสบริษัท"
    },
    company_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "ชื่อบริษัทนั้นๆ"
    },
    website: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "เว็บไซต์"
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ที่อยู่ของบริษัท"
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "อีเมล"
    },
    tel_no: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "เบอร์ติดต่อ"
    }
  }, {
    sequelize,
    tableName: 'ptt_company',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "ptt_company_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};