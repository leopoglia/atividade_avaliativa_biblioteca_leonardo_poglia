const crud = require("../../crud");

async function buscarLivros(){
    return await crud.get("livros");
}

async function cadastrarLivro(req){
    return await crud.save("livros",  0, req.body);   
}

module.exports = {
    buscarLivros,
    cadastrarLivro
}