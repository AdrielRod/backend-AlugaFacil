import { Router } from 'express';
import SessionController from './controllers/SessionController';
import CarController from './controllers/CarController';
import multer from 'multer';
import uploadConfig from './config/upload'

const routes = new Router();
const upload = multer(uploadConfig)


routes.post('/sessions', SessionController.store);
routes.post('/cars', upload.single('foto') ,CarController.store);

export default routes;
