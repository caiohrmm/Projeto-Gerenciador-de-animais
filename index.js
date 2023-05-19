// Configurando express
const express = require("express");
const app = express();

const port = 3000;

// Setup handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.json());

// Elementos estáticos
app.use(express.static("public"));

// Rota de animais
const animalsRouters = require('./animals')

app.use('/animals', animalsRouters)


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
