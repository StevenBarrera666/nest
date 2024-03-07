import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (name) {
        // Expresión regular para validar el formato del correo electrónico
        return /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/.test(name);
      },
      message: (props) => `${props.value} no es un nombre válido!`,
    },
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        // Expresión regular para validar el formato del correo electrónico
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: (props) => `${props.value} no es un correo electrónico válido!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});
