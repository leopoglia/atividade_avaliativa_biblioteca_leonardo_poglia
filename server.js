const express = require("express");
const router = require("./router");
const app = express();
app.use(express.json());

app.use("/api", router);

app.get('/', (req, res) => {
    res.send('<style>*{font-family: system-ui;}html{background-color: #ff6f00; display: flex; align-items: center; justify-content: center; height: 100vh;} button{background-color: #fff; border: none; height: 50px; width: 250px; border-radius: 5px;  cursor: pointer; margin-top: 10px;} button:hover{background-color: #ebebeb;}</style><head><link rel="icon" href="https://www.livrariasfamiliacrista.com.br/media/favicon/default/logo.png" type="image/x-icon"><title>Livraria Cristã</title><body><a href="api/livros/"><button>Ver Livros</button></a><br><button>Cadastrar Livro</button><br><button>Remover Livro</button><br><br><button>Ver Clientes</button><br><button>Adicionar Clientes</button><br><button>Remover Clientes</button></body>')
});

app.listen(3000, () => {
    console.log("App listen on http://localhost:3000");
})