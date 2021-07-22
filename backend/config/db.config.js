const mysql = require("mysql2");
exports.mysqlConnection = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
  port: 3306,
  multipleStatements: true,
});
