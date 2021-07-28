const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// Set up AllPosts Model
class AllPosts extends Model {}

AllPosts.init(
  {
    // set up columns for AllPosts model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    content: {
      type: DataTypes.STRING,
    },
    myPost_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "MyPosts",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "AllPosts",
  }
);

module.exports = AllPosts;
