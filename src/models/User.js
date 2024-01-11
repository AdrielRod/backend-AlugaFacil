import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  nome: String,
  email: String,
  password: String,
});

export default model('User', UserSchema);
