// Conectando MySQL
const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "caioh",
  password: "caiohenrique@12345",
  database: "animals"
});

module.exports = connection
