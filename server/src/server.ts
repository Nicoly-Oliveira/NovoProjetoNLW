import express from 'express'; 

// Rota: endereço completo da requisição
// Recurso: qual entidade estamos acessando do sistema

// GET: buscar uma ou mais informações do backend
// POST: Criar uma nova informação no back-end
// PUT: atualizar uma informação existente no back-end
// DELETE: remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID: 5

const app = express();
app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // JSON 
    return response.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Daniel'
    ]);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Nicoly',
        email: 'nicoly.oavelino@icloud.com'
    };
    return response.json(user);
});

app.listen(3333);