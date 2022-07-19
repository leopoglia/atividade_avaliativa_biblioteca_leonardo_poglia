const crud = require("../../crud");

async function buscarUsuarios(){
    return await crud.get("usuarios");
}

async function buscarUsuario(id){
    if(id){
        return await crud.getById("usuarios", id);
    }else{
        return "Precisa ter o idUsuario"
    }
}

async function cadastrarUsuario(req){
    if(req.body.nome && req.body.cpf && req.body.telefone){
    return await crud.save("usuarios", 0, req.body);
    }else{
        return "Precisa ter os campos nome, cpf, telefone."
    }
}

async function editarUsuario(req, id){
    if(req.body.nome && req.body.cpf && req.body.telefone && id){
        return await crud.save("usuarios", id, req.body);
    }else{
        return "Precisa ter os campos nome, cpf, telefone."
    }
}

async function excluirUsuario(id){
    if(id){
        return await crud.remove("usuarios", id);
    }else{
        return "Precisa ter o campo do id do usuário."
    }
}

module.exports = {
    buscarUsuarios,
    buscarUsuario,
    cadastrarUsuario,
    editarUsuario,
    excluirUsuario
}