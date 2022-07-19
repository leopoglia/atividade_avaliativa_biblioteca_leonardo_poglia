const crud = require("../../crud");

async function buscarAlugueis() {
    return await crud.get("alugueis");
}

async function cadastrarAluguel(req) {
    const usuarios = await crud.get("usuarios"); // BUSCANDO OS USUÁRIOS DO BD
    const cpf = req.body.cpfCliente; // PEGANDO O CPF DIGITADO PELO USUÁRIO NO BODY
    const usuario = usuarios.findIndex(u => u.cpf == cpf); // PROCURANDO UM CPF IGUAL AO DIGITADO NO BD

    const livros = await crud.get("livros"); // BUSCANDO OS LIVROS NO BD
    const livrosAlugados = req.body.livros; // COLOCANDO EM UMA VARIAVEL OS LIVROS QUE SERÃO ALUGADOS
    const livrosVerificados = []; // CRIANDO UMA LISTA PARA OS VERIFICADOS

    if (usuarios[usuario].alugando == false) { // VERIFICA SE O USUÁRIO JÁ ESTÁ ALUGANDO
        if (cpf && livrosAlugados) { // VERIFICA SE POSSUI NO BODY O CPF CLIENTE E OS LIVROS
            for (let i = 0; i < livrosAlugados.length; i++) { // FOR PASSANDO POR TODOS OS LIVROS
                if (livros.findIndex(l => l.id == livrosAlugados[i]) != -1 ) { // VERIFICANDO SE O LIVRO EXISTE
                    livrosVerificados.push(livros.findIndex(l => l.id == livrosAlugados[i])) // COLOCANDO NA LISTA DE LIVROS VERIFICADOS
                    if(livros[livrosVerificados[i]].alugado == false){ // VERIFICA SE O LIVRO JÁ ESTA ALUGADO
                    livros[livrosVerificados[i]].alugado = true; // SETANDO OS LIVROS COMO ALUGADO
                    await crud.save('livros', livros[livrosVerificados[i]].id, livros[livrosVerificados[i]]); // EDITANDO O LIVRO NO BD
                    }else{
                        return "Livro de id " + livrosAlugados[i] + " já está alugado"
                    }
                }else{
                    return "Livro de id " + livrosAlugados[i] + " não existe!"
                }
            }
            usuarios[usuario].alugando = true; // SETANDO OS USUÁRIOS COMO ALUGANDO
            await crud.save("usuarios", usuarios[usuario].id, usuarios[usuario]); // EDITANDO O USUÁRIO NO BD
            return await crud.save("alugueis", 0, req.body); // SALVANDO O ALUGUEL
        } else {
            return 'Precisa ter campo cpfCliente e livros'
        }
    } else {
        return 'Usuário já alugou livros.'
    }
}

async function excluirAluguel(req, id){
    const  alugueis = await buscarAlugueis();
    const aluguel = alugueis.findIndex(a => a.id == id)

    if (id) {

    const usuarios = await crud.get("usuarios"); // BUSCANDO OS USUÁRIOS DO BD
    const cpf = alugueis[aluguel].cpfCliente // PEGANDO O CPF DIGITADO PELO USUÁRIO NO PARAMETRO
    const usuario = usuarios.findIndex(u => u.cpf == cpf); // PROCURANDO UM CPF IGUAL AO DIGITADO NO BD

    usuarios[usuario].alugando = false; // SETANDO OS USUÁRIOS COMO NÃO ALUGADO
    await crud.save("usuarios", usuarios[usuario].id, usuarios[usuario]); // EDITANDO O USUÁRIO NO BD

    const livros = await crud.get("livros"); // BUSCANDO OS LIVROS NO BD
    const livrosAlugados = alugueis[aluguel].livros; // COLOCANDO EM UMA VARIAVEL OS LIVROS QUE FORAM ALUGADOS
    const livrosVerificados = []

    for (let i = 0; i < livrosAlugados.length; i++) { // FOR PASSANDO POR TODOS OS LIVROS
        if (livros.findIndex(l => l.id == livrosAlugados[i]) != -1 ) { // VERIFICANDO SE O LIVRO TEM A MESMA POSSIÇÃO DOS LIVROS VERIFICADOS
            livrosVerificados.push(livros.findIndex(l => l.id == livrosAlugados[i])) // COLOCANDO NA LISTA DE LIVROS VERIFICADOS
            livros[livrosVerificados[i]].alugado = false; // SETANDO OS LIVROS COMO NÃO ALUGADO
            await crud.save('livros', livros[livrosVerificados[i]].id, livros[livrosVerificados[i]]); // EDITANDO O LIVRO NO BD
        }
    }
    }else{
        return 'Precisa ter o campo do id do aluguel.'
    }

    return await crud.remove("alugueis", id); // SALVANDO O ALUGUEL
}

module.exports = {
    buscarAlugueis,
    cadastrarAluguel,
    excluirAluguel
}