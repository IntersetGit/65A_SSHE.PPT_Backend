const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_projects', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักสร้างโครงการบริษัท",
      primaryKey: true
    },
    project_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "ชื่อโครงการบริษัท"
    },
    favorite_status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "สถานะรายการโปรด 0 = ไม่ใช่รายการโปรด 1 = รายการโปรด"
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสผู้สร้างโครงการของบริษัทนั้นๆ",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "สร้างข้อมูลโดย",
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "สร้างข้อมูลวันที่"
    }
  }, {
    sequelize,
    tableName: 'ptt_projects',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "fki_fk_pjt_created_by",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "fki_fk_pjt_user_id",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "ptt_projects_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
