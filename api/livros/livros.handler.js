const sandbox = require("../../sandbox");
const crud = require("../../crud");


async function buscarLivros(res){
    const dados = await crud.get("pessoas");
    const array = [];
    array[0] = dados
    console.log(array);
}

module.exports = {
    buscarLivros
}