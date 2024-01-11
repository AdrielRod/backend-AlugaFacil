/*
    MÉTODOS
    index: listagem de sessões
    store: criar uma sessão
    show: listar uma única sessão
    update: alterar alguma sessão
    destroy: quando queremos deletar uma sessão
*/
import Car from "../models/Car";
import multer from 'multer';
import uploadConfig from '../config/upload'
const upload = multer(uploadConfig)

class CarController {

    async index(req, res){
        const { disponivel } = req.query
        const houses = await Car.find({disponivel})

        return res.json(houses)
    }

    async store(req, res) {
        const {filename} = req.file
        const {ano, placa, cor, nome, disponivel, precoPorDia} = req.body
        const {user_id} = req.headers

        const imageUrl = `${process.env.APP_URL}/files/${filename}`;
        

        const car = await Car.create({
            dono: user_id,
            foto: filename,
            ano,
            placa,
            cor,
            nome,
            disponivel,
            precoPorDia,
            imageUrl

        })

        return res.json(car)
    }
}

export default new CarController();