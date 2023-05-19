const express = require("express");
const router = express.Router();

const pool = require("../db/connection");

router.get("/add", (req, res) => {
  res.render("addanimals");
});

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
      return
    } else {
        res.redirect('/animals/add')
        console.log('Os dados foram inseridos no banco')
    }
  });
});

module.exports = router;
