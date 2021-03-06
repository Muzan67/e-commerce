const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    // Tag - ID column
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Tag - Tag_Name column
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
