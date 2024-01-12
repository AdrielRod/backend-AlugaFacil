import Car from '../models/Car'

class DashboardController {
  async show(req, res) {
    const { user_id } = req.headers
    const cars = await Car.find({ dono: user_id })
    return res.json(cars)
  }
}

export default new DashboardController()
