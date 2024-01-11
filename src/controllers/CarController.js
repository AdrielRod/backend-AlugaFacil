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
import fs from 'fs/promises'
import path from "path";

class CarController {

    async index(req, res) {
        const { disponivel } = req.query
        const houses = await Car.find({ disponivel })

        return res.json(houses)
    }

    async store(req, res) {
        const { filename } = req.file
        const { ano, placa, cor, nome, disponivel, precoPorDia } = req.body
        const { user_id } = req.headers
        const user = await User.findById(user_id)

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

        await User.findByIdAndUpdate(
            user_id,
            {
                $inc: { vagasPostada: 1 },
                $push: { carrosAlugados: car._id }
            }
        )


        return res.json(car)
    }

    async update(req, res) {
        const { car_id } = req.params;
        const { filename } = req.file
        const { ano, placa, cor, nome, disponivel, precoPorDia } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id)
        const cars = await Car.findById(car_id)

        if (String(user._id) !== String(cars.dono)) {
            return res.status(401).json({ error: "Não autorizado." })
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
        )




        return res.send()
    }

    async destroy(req, res) {
        const { car_id } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id)
        const cars = await Car.findById(car_id)

        // console.log("User ID:", user_id);
        // console.log("Car ID:", car_id);
        // console.log("User:", user);
        // console.log("Car:", cars);

        await Car.findByIdAndDelete({ _id: car_id })
        await User.findOneAndUpdate(
            { _id: user_id },
            {
                $inc: { vagasPostada: -1 },
                $pull: { carrosAlugados: car_id }
            }
        )


        return res.json({ message: "Excluida com sucesso." })
    }
}

export default new CarController();