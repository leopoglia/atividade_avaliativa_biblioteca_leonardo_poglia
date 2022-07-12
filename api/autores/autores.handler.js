const crud = require("../../crud");

async function buscarAutores(){
    return await crud.get("autores");
}

async function cadastrarAutores(req){
    if(req.body.nome){
    return await crud.save("autores", 0, req.body);
    }else{
        return "Precisa ter o campo de nome."
    }
}

module.exports = {
    buscarAutores,
    cadastrarAutores
}