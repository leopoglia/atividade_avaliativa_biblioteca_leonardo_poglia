const crud = require("../../crud");

async function buscarEditoras(){
    return await crud.get("editoras");
}

async function cadastrarEditoras(req){
    return await crud.save("editoras", 0, req.body);
    
}

module.exports = {
    buscarEditoras,
    cadastrarEditoras
}