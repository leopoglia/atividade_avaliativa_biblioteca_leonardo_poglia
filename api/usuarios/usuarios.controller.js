const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const usuariosHandler = require("./usuarios.handler");

router.get("/", (req, res) => {
    usuariosHandler.buscarUsuarios().then(dados => res.json(dados));
})

router.get("/:id", (req, res) => {
    usuariosHandler.buscarUsuario(req.params.id).then(dados => res.json(dados));
})

router.post("/", (req, res) => {
    usuariosHandler.cadastrarUsuario(req).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {
    usuariosHandler.editarUsuario(req, req.params.id).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {
    usuariosHandler.excluirUsuario(req.params.id).then(dados => res.json(dados));
})

module.exports = router;