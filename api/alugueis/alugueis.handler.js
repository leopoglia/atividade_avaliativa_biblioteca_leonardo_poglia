const crud = require("../../crud");

async function buscarAlugueis(){
    return await crud.get("alugueis");
}

async function cadastrarAlugueis(req){
    return await crud.save("alugueis", 0, req.body);
}

module.exports = {
    buscarAlugueis,
    cadastrarAlugueis
}