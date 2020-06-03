import express, { response } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);


//Rota: Endereço completo da requisição
//Recurso: Qual Entidade estamos acessando do sistema

//GET: Buscar uma oumais informações no back-end
//POST: Criar uma nova informaçãono back-end
//PUT: Atualizar uma ou mais informações no back-end
//DELETE: Remover uma informação no back-end

//POST: http://localhost:3333/users = Criar um Usuário
//GET: http://localhost:3333/users = Listar usuário
//GET: http://localhost:3333/users/5 = Buscar dados do usuário com ID 5


//Request Param = Parâmetros que vem na própria rota que identificam um recurso
//Query Param = Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação..
// const users = [
//     'Diego',
//     'Cleinton',
//     'Robson',
//     'Daniel'
// ];

// //Filtrando usuários
// app.get('/users', (request, response) => {
//     const search = String(request.query.search);
    
//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     return response.json(filteredUsers);    
// });

// //listando usuário
// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);

//     const user = users[id];

//     return response.json(user);
// });

// app.post('/users', (request, response) =>{
//     const data = request.body;

//     const user = {
//         name: data.name,
//         email: data.email
//     }
//     return response.json(user);
// });