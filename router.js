const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());

const livros = require("./api/livros/livros.controller");
router.use("/livros", livros);

module.exports = router;