const express = require("express");
const router = express.Router();

const pool = require("../db/connection");

router.get('/add', (req, res) => {
    res.render('addanimals')
})



module.exports = router