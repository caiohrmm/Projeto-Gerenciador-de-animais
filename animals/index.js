const express = require("express");
const router = express.Router();

const pool = require("../db/connection");

// Add animals
router.get("/add", (req, res) => {
  res.render("addanimals");
});

// Save animals in database
router.post("/save", (req, res) => {
  const animal = req.body.animalname;
  const race = req.body.raceanimal;
  const ownername = req.body.ownername;
  const description = req.body.description;

  const data = [
    "animalname",
    "race",
    "ownername",
    "descri",
    animal,
    race,
    ownername,
    description,
  ];

  const sql = `INSERT INTO animal (??, ??, ??, ??) VALUES (?, ?, ?, ?)`;

  pool.query(sql, data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect("/animals/add");
      console.log("Os dados foram inseridos no banco");
    }
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const data = ["idanimal", id];

  const sql = `SELECT * FROM animal WHERE ??=?`;

  pool.query(sql, data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const animal = data[0];
      res.render("animalfocus", { animal });
    }
  });
});

// List animals
router.get("/", (req, res) => {
  const data = ["idanimal", "animalname", "race", "ownername"];
  const sql = `SELECT ??,??,??, ?? FROM animal`;
  pool.query(sql, data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const animals = data;
      res.render("animals", { animals });
    }
  });
});

module.exports = router;
