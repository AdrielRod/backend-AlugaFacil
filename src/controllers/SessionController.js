/*
    MÉTODOS
    index: listagem de sessões
    store: criar uma sessão
    show: listar uma única sessão
    update: alterar alguma sessão
    destroy: quando queremos deletar uma sessão

    teste1 = 3e
    teste0 = 41
    teste = 0e
*/
import User from '../models/User'
import * as Yup from 'yup'

class SessionController {
  async store(req, res) {
    const { email, nome } = req.body
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      nome: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' })
    }

    try {
      let user = await User.findOne({ email })

      if (!user) {
        user = await User.create({ email, nome })
      }

      return res.json({ user })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro interno do servidor.' })
    }
  }
}

export default new SessionController()
