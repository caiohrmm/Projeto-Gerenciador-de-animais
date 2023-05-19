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

// Edit animals view
router.get("/edit/:id", (req, res) => {
  const id = req.params.id;

  const data = ["idanimal", id];

  const sql = `SELECT * FROM animal WHERE ??=?`;

  pool.query(sql, data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const animal = data[0];

      console.log(animal);
      res.render("editanimal", { animal });
    }
  });
});

// Edit animals post
router.post("/edit/editing/:id", (req, res) => {
  const id = req.params.id;

  const name = req.body.animalname;
  const race = req.body.raceanimal;
  const owner = req.body.ownername;
  const description = req.body.description;

  const data = [
    "animalname",
    name,
    "race",
    race,
    "ownername",
    owner,
    "descri",
    description,
    "idanimal",
    id,
  ];

  const sql = `UPDATE animal SET ??=?, ??=?, ??=?, ??=? WHERE ??=?`;

  pool.query(sql, data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect("/animals/");
    }
  });
});

// Delete animal

// Delete animals view
router.get("/delete/:id", (req, res) => {
  const id = req.params.id;

  const data = ["idanimal", id];

  const sql = `SELECT * FROM animal WHERE ??=?`;

  pool.query(sql, data, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      const animal = data[0];

      console.log(animal);
      res.render("deleteanimal", { animal });
    }
  });
});

// Delete animals post

router.post("/delete/deleting/:id", (req, res) => {
  const id = req.params.id;

  const data = ["idanimal", id];

  const sql = `DELETE FROM animal WHERE ??=?`;

  pool.query(sql, data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.redirect("/animals/");
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
