const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const usuariosHandler = require("./usuarios.handler");

router.get("/", (req, res) => {
    usuariosHandler.buscarUsuarios().then(dados => res.json(dados));
})

router.post("/", (req, res) => {
    usuariosHandler.cadastrarUsuario(req).then(dados => res.json(dados));
})

module.exports = router;