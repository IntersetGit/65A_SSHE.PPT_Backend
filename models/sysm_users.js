const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sysm_users', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสหลักผู้ใช้งานระบบ",
      primaryKey: true
    },
    roles_id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสสิทธิ์ผู้ใช้งาน"
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "ชื่อผู้ใช้ระบบ"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัสสำหรับเข้าระบบ"
    },
    e_mail: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "อีเมลผู้ใช้งาน"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "บันทึก"
    },
    status_login: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "สถานะเข้าระบบ "
    },
    isuse: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "สถานะข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน"
    },
    code_ldap: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "รหัสผู้ใช้งานในองค์กร"
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ออกจากระบบครั้งสุดท้าย"
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "ผู้สร้างข้อมูล"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "สร้างข้อมูลวันที่"
    },
    update_by: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "แก้ไขข้อมูล"
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "แก้ไขข้อมูลวันที่"
    },
    is_ad: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      comment: "สถานะผู้ใช้ที่เป็นองค์กรจริง"
    }
  }, {
    sequelize,
    tableName: 'sysm_users',
    schema: 'system',
    timestamps: false,
    indexes: [
      {
        name: "sysm_users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
