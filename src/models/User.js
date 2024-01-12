import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  nome: String,
  email: String,
  carrosPostados: Number,
  listaCarrosPostados: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Car',
    },
  ],
})

export default model('User', UserSchema)
