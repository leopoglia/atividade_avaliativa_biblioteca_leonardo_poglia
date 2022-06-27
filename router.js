const express = require("express");
const router = express.Router();

const livros = require("./api/livros/livros.controller");


router.use("api/livros", livros);

module.exports = router;