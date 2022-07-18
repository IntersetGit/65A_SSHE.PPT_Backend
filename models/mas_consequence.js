const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mas_consequence', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name_eng: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ชื่อภาษาอังกฤษ"
    },
    name_thai: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ชื่อภาษาไทย"
    },
    type_consequence: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "0 =  health safety and environment\n1 = financial\n2 = reputation and customer experience\n3 = business operations\n4 = legal and regulatory compliance"
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
    },
    value: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "0 = insignificant\n1 = minor\n2 = moderate\n3 = major\n4 = critical"
    }
  }, {
    sequelize,
    tableName: 'mas_consequence',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "mas_consequence_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
