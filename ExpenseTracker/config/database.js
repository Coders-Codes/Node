const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "SQL@123sql", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
