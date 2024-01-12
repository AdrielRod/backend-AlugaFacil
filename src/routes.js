import { Router } from 'express'
import multer from 'multer'
import SessionController from './controllers/SessionController'
import DashboardController from './controllers/DashboardController'
import CarController from './controllers/CarController'
import ReserveController from './controllers/ReserveController'
import uploadConfig from './config/upload'

const routes = new Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)
routes.post('/cars', upload.single('foto'), CarController.store)
routes.get('/cars', CarController.index)
routes.put('/cars/:car_id', upload.single('foto'), CarController.update)
routes.delete('/cars', CarController.destroy)

routes.get('/dashboard', DashboardController.show)
routes.post('/cars/:car_id/reserve', ReserveController.store)
routes.get('/reserves', ReserveController.index)
routes.delete('/reserves/cancel', ReserveController.destroy)

export default routes
