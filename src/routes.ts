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
routes.post('/embarcacoesjet',authMiddleware, EmbarcacoesjetskiController.create);
routes.post('/avariaslancha', authMiddleware, AvariaslanchaController.create);
routes.post('/avariasjetski', authMiddleware, AvariasjetskiController.create);
routes.post('/achadoslancha', authMiddleware, AchadoslanchaController.create);
routes.post('/achadosjetskip', authMiddleware, AchadosjetskipController.create);
routes.post('/revisaolancha', authMiddleware, RevisaolanchaController.create);
routes.post('/revisaojet', authMiddleware, RevisaojetController.create);
routes.post('/agendamento', authMiddleware,AgendamentoController.create);
routes.post('/forgot', authMiddleware, UsersController.forgotPassword);


export default routes;
