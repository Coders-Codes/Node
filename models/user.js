const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("user1", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    aallowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    email: Sequelize.STRING,
  },
});

module.exports = User;
