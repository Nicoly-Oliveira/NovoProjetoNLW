import express from 'express';
import path from 'path';
import routes from './routes';

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

const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);