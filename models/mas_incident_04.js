const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_incident_04', {
    'id ': {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    data: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true
    },
    incident_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    issue: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mas_incident_04',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "mas_incident_04_pkey",
        unique: true,
        fields: [
          { name: "id " },
        ]
      },
    ]
  });
};
