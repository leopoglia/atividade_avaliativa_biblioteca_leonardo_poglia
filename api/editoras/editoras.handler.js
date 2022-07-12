const crud = require("../../crud");

async function buscarEditoras() {
    return await crud.get("editoras");
}

async function cadastrarEditoras(req) {
    if (req.body.nome) {
        return await crud.save("editoras", 0, req.body);
    } else {
        return "Precisa ter o campo de nome."
    }
}

module.exports = {
    buscarEditoras,
    cadastrarEditoras
}