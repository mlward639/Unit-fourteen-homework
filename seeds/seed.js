const sequelize = require("../config/connection");
const { User, AllPosts } = require("../models");

const userData = require("./userData.json");
const allPostsData = require("./allPostsData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of allPostsData) {
    await AllPosts.create({
      ...post,
    });
  }

  process.exit(0);
};

seedDatabase();
