const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const alugueisHandler = require("./alugueis.handler");

router.get("/", (req, res) => {
    alugueisHandler.buscarAlugueis().then(dados => res.json(dados))
})

router.post("/", (req, res) => {
    alugueisHandler.cadastrarAluguel(req).then(dados => res.json(dados))
})

router.delete("/:id", (req, res) => {
    alugueisHandler.excluirAluguel(req, req.params.id).then(dados => res.json(dados));
})


module.exports = router;