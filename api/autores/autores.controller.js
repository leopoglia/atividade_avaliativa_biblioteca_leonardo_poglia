const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const autoresHandler = require("./autores.handler");

router.get("/", (req, res) => {
    autoresHandler.buscarAutores().then(dados => res.json(dados))
})

router.post("/", (req, res) => {
    autoresHandler.cadastrarAutores(req).then(dados => res.json(dados))
})

module.exports = router;