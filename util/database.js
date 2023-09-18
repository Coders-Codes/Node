/*connect our databse to inside our appilcation. There are two ways to connect mysql database
1. Creating new connection everytime we perform a new querry
2. to create a so-called connection pool*/

const mysql = require("mysql"); // importing mysql package
const pool = mysql.createPool({
  host: localhost,
  user: "root",
  database: "node-complete",
  password: "SQL@123sql",
});

module.exports = pool.promise();
