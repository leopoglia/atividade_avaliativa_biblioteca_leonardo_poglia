const crud = require("../../crud");

async function buscarUsuarios(){
    return await crud.get("usuarios");
}

async function cadastrarUsuario(req){
    if(req.body.nome && req.body.cpf && req.body.telefone && req.body.alugando){
    return await crud.save("usuarios", 0, req.body);
    }else{
        return "Precisa ter os campos nome, cpf, telefone e alugando."
    }
}

module.exports = {
    buscarUsuarios,
    cadastrarUsuario
}