import express from 'express';
import cors from 'cors'
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);


app.use('/uploads', express.static(path.resolve(__dirname,  '..', 'uploads')));

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
