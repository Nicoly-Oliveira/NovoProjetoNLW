import express from 'express';

const app = express();

app.use(express.json());
// Rota: endereço completo da requisição
// Recurso: qual entidade estamos acessando do sistema

// GET: buscar uma ou mais informações do backend
// POST: Criar uma nova informação no back-end
// PUT: atualizar uma informação existente no back-end
// DELETE: remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID: 5

// Request Param: Parâmetros que vem na própria rota que identicam os recursos 
// Query Param: Parêmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // JSON 
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };
    return response.json(user);
});

app.listen(3333);