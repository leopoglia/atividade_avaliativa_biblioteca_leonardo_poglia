const crud = require("../../crud");

async function buscarAlugueis(){
    return await crud.get("alugueis");
}

async function cadastrarAlugueis(req){
    if(req.body.cpfCliente){
    return await crud.save("alugueis", 0, req.body);
    }else{
        return 'Precisa ter campo cpfCliente'
    }
}

module.exports = {
    buscarAlugueis,
    cadastrarAlugueis
}