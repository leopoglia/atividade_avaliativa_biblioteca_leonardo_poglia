const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());

const livros = require("./api/livros/livros.controller");
router.use("/livros", livros);

const usuarios = require("./api/usuarios/usuarios.controller");
router.use("/usuarios", usuarios);

const editoras = require("./api/editoras/editoras.controller");
router.use("/editoras", editoras);

const autores = require("./api/autores/autores.controller");
router.use("/autores", autores);


module.exports = router;