import { Router } from 'express';
import UsersController from './controllers/UsersController';
import EmbarcacoeslanchaController from './controllers/EmbarcacoeslanchaController';
import EmbarcacoesjetskiController from './controllers/EmbarcacoesjetskiController';
import AvariaslanchaController from './controllers/AvariaslanchaController';
import AvariasjetskiController from './controllers/AvariasjetskiController';
import AchadoslanchaController from './controllers/AchadoslanchaController';
import AchadosjetskipController from './controllers/AchadosjetskipController';
import RevisaolanchaController from   './controllers/RevisaolanchaController';
import RevisaojetController from   './controllers/RevisaojetskipController';
import AgendamentoController from   './controllers/AgendamentoController';
import AuthController from './controllers/AuthController';
import authMiddleware from './middlewares/authMiddlewe';
import ControllertudoController from './controllers/ControllerstudoController';

const routes = Router();


routes.post('/users',UsersController.create);
routes.post('/auth',authMiddleware, AuthController.authenticate);
routes.post('/login', UsersController.login);
routes.post('/function',authMiddleware,ControllertudoController.create);
routes.post('/embarcacoes',authMiddleware, EmbarcacoeslanchaController.create);
routes.post('/embarcacoesjet', EmbarcacoesjetskiController.create);
routes.post('/avariaslancha', AvariaslanchaController.create);
routes.post('/avariasjetski', AvariasjetskiController.create);
routes.post('/achadoslancha', AchadoslanchaController.create);
routes.post('/achadosjetskip', AchadosjetskipController.create);
routes.post('/revisaolancha', RevisaolanchaController.create);
routes.post('/revisaojet', RevisaojetController.create);
routes.post('/agendamento',AgendamentoController.create);
routes.post('/forgot',UsersController.forgotPassword);


export default routes;