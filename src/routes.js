import { Router } from 'express';
import SessionController from './controllers/SessionController';
import CarController from './controllers/CarController';
import multer from 'multer';
import uploadConfig from './config/upload'

const routes = new Router();
const upload = multer(uploadConfig)


routes.post('/sessions', SessionController.store);
routes.post('/cars', upload.single('foto') ,CarController.store);
routes.get('/cars', CarController.index);
routes.put('/cars/:car_id', upload.single('foto') , CarController.update);
routes.delete('/cars', CarController.destroy)


export default routes;
