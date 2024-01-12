import Reserve from "../models/Reserve";
import User from "../models/User";
import Car from "../models/Car";
import { exit } from "process";
import { isValidObjectId } from "mongoose";

class ReserveController {
    async store(req, res) {
        const { user_id } = req.headers
        const { car_id } = req.params
        const { date } = req.body

        console.log(user_id)
        console.log(car_id)
        console.log(date)

        if (!isValidObjectId(car_id)) {
            return res.status(400).json({ message: 'Esse carro não existe' })
        }
        const car = await Car.findById(car_id)
        if (car.disponivel !== true) {
            return res.status(400).json({ message: "Carro não disponivel" })
        }
        const user = await User.findById(user_id)
        if (String(user._id) === String(car.dono)) {
            return res.status(401).json({ message: "Não autorizado." })
        }

        const reserve = await Reserve.create({
            user: user_id,
            car: car_id,
            date
        })

        await reserve.populate('car')
        await reserve.populate('user')
        return res.json(reserve)



    }
}

export default new ReserveController()