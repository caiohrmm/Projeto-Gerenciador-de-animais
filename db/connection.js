// Conectando MySQL
const mysql = require("mysql");

const connection = mysql.createPool({
  connectionLimit: 10,
  host: "26.185.31.219",
  user: "caioh",
  password: "caiohenrique@12345",
  database: "animals"
});

module.exports = connection
