const express = require("express");
const router = express.Router();

const livrosHandler = require("./livros.handler");

router.get('/', (req, res) => {
    res.send('Servidor Online')
});

module.exports = router;