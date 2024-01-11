import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  nome: String,
  email: String,
  vagasPostada: Number,
  carrosAlugados: [{
    type: Schema.Types.ObjectId,
    ref: 'Car'
  }],
});

export default model('User', UserSchema);
