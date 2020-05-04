const db = require("../models");

const seedAuthor = require('../seeders/author')
const seedPost = require('../seeders/post')

db.sequelize.sync().then(async () => {
  console.log(
      await seedAuthor.seed(10),
      await seedPost.seed(10, 10)
  )
});
