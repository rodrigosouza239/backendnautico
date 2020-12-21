import { Router } from 'express';
import UsersController from './controllers/UsersController';
import EmbarcacoeslanchaController from './controllers/EmbarcacoeslanchaController';
import EmbarcacoesjetskiController from './controllers/EmbarcacoesjetskiController';
import AvariaslanchaController from './controllers/AvariaslanchaController';
import AvariasjetskiController from './controllers/AvariasjetskiController';
import AchadoslanchaController from './controllers/AchadoslanchaController';
import AchadosjetskipController from './controllers/AchadosjetskipController';
import RevisaolanchaController from   './controllers/RevisaolanchaController';
import AuthController from './controllers/AuthController';
import authMiddleware from './middlewares/authMiddlewe';

const routes = Router();


routes.post('/users', UsersController.create);
routes.post('/login', UsersController.login);
routes.post('/embarcacoes', EmbarcacoeslanchaController.create);
routes.post('/embarcacoesjet', EmbarcacoesjetskiController.create);
routes.post('/avariaslancha', AvariaslanchaController.create);
routes.post('/avariasjetski', AvariasjetskiController.create);
routes.post('/achadoslancha', AchadoslanchaController.create);
routes.post('/achadosjetskip', AchadosjetskipController.create);
routes.post('/revisaolancha', RevisaolanchaController.create);
routes.post('/forgot',UsersController.forgotPassword);


export default routes;