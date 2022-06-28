const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());


const usuariosHandler = require("./livros.handler");

router.get("/", (req, res) => {
    res.json(usuariosHandler.buscarLivros(res));
})

module.exports = router;