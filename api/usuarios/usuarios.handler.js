const crud = require("../../crud");

async function buscarUsuarios(){
    return await crud.get("usuarios");
}

async function cadastrarUsuario(req){
    return await crud.save("usuarios", 0, req.body);
}

module.exports = {
    buscarUsuarios,
    cadastrarUsuario
}