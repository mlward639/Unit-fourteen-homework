const AllPosts = require("./AllPosts");
// const MyPosts = require('./MyPosts');
const User = require("./User");

User.hasMany(AllPosts, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

AllPosts.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, AllPosts };
