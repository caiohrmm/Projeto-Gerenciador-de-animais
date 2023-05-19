// Configurando express
const express = require("express");
const app = express();

const port = 3000;

// Setup handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Conectando MySQL pelo pool
const pool = require("./db/connection");

// Ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Elementos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Servidor aberto na porta ${port}`);
  }
});
