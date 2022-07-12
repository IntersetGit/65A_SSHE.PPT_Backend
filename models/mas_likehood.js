const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_likehood', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name_eng: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name_thai: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    value: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "0 = insignificant\n1 = minor\n2 = moderate\n3 = major\n4 = critical"
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
    tableName: 'mas_likehood',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "mas_likehood_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
