const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const editorasHandler = require("./editoras.handler");

router.get("/", (req, res) => {
    editorasHandler.buscarEditoras().then(dados => res.json(dados))
})

router.post("/", (req, res) => {
    editorasHandler.cadastrarEditoras(req).then(dados => res.json(dados))
})

module.exports = router;