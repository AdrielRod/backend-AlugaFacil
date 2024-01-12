import { Schema, model } from 'mongoose'

const CarSchema = new Schema(
  {
    ano: String,
    placa: String,
    cor: String,
    precoPorDia: Number,
    nome: String,
    disponivel: Boolean,
    foto: String,
    dono: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
)

CarSchema.virtual('foto_url').get(function () {
  return `http://localhost:3333/files/${this.foto}`
})

export default model('Car', CarSchema)
