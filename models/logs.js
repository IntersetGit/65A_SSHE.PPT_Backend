const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logs', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mac_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    browser: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    logdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    os: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sysm_type: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'logs',
    schema: 'system',
    timestamps: false
  });
};
