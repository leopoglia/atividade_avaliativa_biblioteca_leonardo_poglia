const crud = require("../../crud");

async function buscarAutores(){
    return await crud.get("autores");
}

async function cadastrarAutores(req){
    return await crud.save("autores", 0, req.body);
}

module.exports = {
    buscarAutores,
    cadastrarAutores
}