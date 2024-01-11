/*
    MÉTODOS
    index: listagem de sessões
    store: criar uma sessão
    show: listar uma única sessão
    update: alterar alguma sessão
    destroy: quando queremos deletar uma sessão

    teste1 = 3e
    teste0 = b2
    teste = 0e
*/
import User from "../models/User"
import bcrypt from 'bcrypt'

class SessionController {
    async store(req, res) {
        const { email, nome, senha } = req.body

        let user = await User.findOne({
            email: email
        })

        if (!user) {
            user = await User.create({
                nome: nome,
                email: email,
                senha: senha,
            })
        }else{
            if(user.senha == senha){
                user = {
                    nome: nome,
                    senha: senha,
                    email: email,
                }
            }
        }


        return res.json(user)
    }
}

export default new SessionController()