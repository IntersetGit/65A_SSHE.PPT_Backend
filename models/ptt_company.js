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
    },
    company_type: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ประเภทของบริษัท   สำนักงานใหญ่เป็น 1 สำนักงานสาขาเป็น 0"
    },
    active: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "0 = non active 1= active"
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
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
