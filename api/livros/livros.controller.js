const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const livrosHandler = require("./livros.handler");

router.get("/", (req, res) => {
    livrosHandler.buscarLivros().then(dados => res.json(dados))
})

router.post("/", (req, res) => {
    livrosHandler.cadastrarLivro(req).then(dados => res.json(dados))
})

module.exports = router;