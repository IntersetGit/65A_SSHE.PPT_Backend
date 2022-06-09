const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_Incident_old', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสประจำตารางหลัก Incident",
      primaryKey: true
    },
    Project_name: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "ชื่อโปรเจคที่ทำ"
    },
    Company_name: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "ชือบริษัท"
    },
    Date_Incident: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่เกิดอุบัติเหตุ"
    },
    Time_Incident: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "เวลาที่เกิดอุบัติเหตุ"
    },
    Date_Report: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่ทำรายงาน"
    },
    Time_Report: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "เวลาที่ทำรายงาน"
    },
    Incident_No: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "เลขที่อุบัติเหตุ"
    },
    Location_Incident: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    Company_Incident: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "บริษัทที่รับผิดชอบ"
    },
    Emp_Kss: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    Emp_Subcontractor: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "ชื่อผู้รับเหมาช่วง"
    },
    Employment_years: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ระยะเวลาที่ทำงาน(ปี)ของผู้ที่ได้รับบาดเจ็บ"
    },
    Employment_months: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "ระยะเวลาการทำงาน(เดือน)ของผู้ได้รับบาดเจ็บ"
    },
    Employment_age: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "อายุของผู้ได้รับบาดเจ็บ"
    },
    Injured_name: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "ชื่อของผู้ได้รับบาดเจ็บ"
    },
    Injured_Nationality: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "สัญชาติของผู้ที่รับบาดเจ็บ"
    },
    Injured_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "รหัสประจำตัวประชาชนของผู้ได้รับบาดเจ็บ"
    },
    Injured_Address: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ที่อยู่ของผู้ได้รับบาดเจ็บ"
    },
    Witness_Name: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "ชื่อของพยาน"
    },
    Witness_Company: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "บรัษัทของพยาน"
    },
    Witness_Position: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "ตำแหน่งงานของพยาน"
    },
    Question_1: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "คำถามที่1 หัวข้อ 3. Witness or Witness Statement คำถามคือ Witness statement attached?\n  NO เป็น  0  \/ YES  เป็น 1"
    },
    Property_Damage_1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ถามตอบหัวข้อ Property Damage ข้อที่1 คำถามคือ List of Property\/Materials Damage (use control number if available) "
    },
    Property_Damage_2: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ถามตอบหัวข้อ Property Damage ข้อที่2 คำถามคือ Nature of Damage"
    },
    Property_Damage_3: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ถามตอบหัวข้อ Property Damage ข้อที่3 คำถามคือ Object\/substance inflicting damage"
    },
    Property_Damage_4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ถามตอบหัวข้อ Property Damage ข้อที่4 คำถามคือ Damage cost (approximately)"
    },
    Incident_Desciption: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "คำอธิบายของอุบัติเหตุ"
    }
  }, {
    sequelize,
    tableName: 'ptt_Incident_old',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "ptt_Incident_pkey_old",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
