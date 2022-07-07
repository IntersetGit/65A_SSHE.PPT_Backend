const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_sshe_issue', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      comment: "รหัสประจำตาราง sshe issue",
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่ทำรายงาน"
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสประจำตาราง project"
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ชื่อโลเคชั่น"
    },
    issue_type_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัส issue_type"
    },
    hazard_id: {
      type: DataTypes.UUID,
      allowNull: true,
      comment: "รหัสตาราง hazard"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    suggestion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "0 = wait for Approve\n1= wait for close\n2=Approved"
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "วันที่กำหนดไว้"
    },
    lat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    long: {
      type: DataTypes.TEXT,
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
    tableName: 'ptt_sshe_issue',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "ptt_sshe_issue_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
