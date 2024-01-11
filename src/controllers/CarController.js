/*
    MÉTODOS
    index: listagem de sessões
    store: criar uma sessão
    show: listar uma única sessão
    update: alterar alguma sessão
    destroy: quando queremos deletar uma sessão
*/
import Car from "../models/Car";
import User from "../models/User";

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

        const car = await Car.create({
            dono: user_id,
            foto: filename,
            ano,
            placa,
            cor,
            nome,
            disponivel,
            precoPorDia,
        })

        return res.json(car)
    }

    async update(req, res){
        const {car_id} = req.params;
        const {filename} = req.file
        const {ano, placa, cor, nome, disponivel, precoPorDia} = req.body;
        const {user_id} = req.headers;
    
        const user = await User.findById(user_id)
        const cars = await Car.findById(car_id)

        if(String(user._id) !== String(cars.dono)){
            return res.status(401).json({error: "Não autorizado."})
        }

        await Car.findByIdAndUpdate(
            car_id,
            {
                dono: user_id,
                foto: filename,
                ano,
                placa,
                cor,
                nome,
                disponivel,
                precoPorDia,
            },
            { new: true } // Retorna o documento atualizado
        );


        return res.send()
    }
}

export default new CarController();