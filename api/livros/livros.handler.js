const crud = require("../../crud");

async function buscarLivros() {
    return await crud.get("livros");
}

async function cadastrarLivro(req) {
    if (req.body.nome && req.body.descricao && req.body.paginas && req.body.status) {
        return await crud.save("livros", 0, req.body);
    } else {
        return "Precisa ter os campos nome, descrição, paginas e status."
    }
}

module.exports = {
    buscarLivros,
    cadastrarLivro
}