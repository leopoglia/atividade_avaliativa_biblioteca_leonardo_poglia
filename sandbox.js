const crud = require("./crud");

// async function salvarDado(){
//     const savedData = await crud.save("livros", "JgluQ4mFWuift2cC0wCP",
//     { nome: "Bruno", sobrenome: "Carvalho", idade: 19 });
//     console.log(savedData);
// }

// salvarDado();



async function buscarDados(){
     const dados = await crud.get("pessoas");
     return dados;
}

// // --------------------------------------------------------

// async function buscarDadosId(){
//      const dados = await crud.getById("pessoas", "OgpmSN39HZuUW9jtjA3w");
//      console.log(dados);
// }

// buscarDadosId();

// // --------------------------------------------------------

// async function deletar(){
//      const dados = await crud.remove("pessoas", "OgpmSN39HZuUW9jtjA3w");
//      console.log(dados)
// }

// deletar();

module.exports = {
    buscarDados
}