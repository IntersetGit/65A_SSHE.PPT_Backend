const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_incident_type', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    incident_type_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "1 active 0 non active"
    },
    incident_type_id: {
      type: DataTypes.STRING,
      allowNull: true
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
    update_by: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'sysm_users',
        key: 'id'
      }
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mas_incident_type',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "mas_incident_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
