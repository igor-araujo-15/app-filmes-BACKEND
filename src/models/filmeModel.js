const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  nota: {
    type: Number,
    required: true
  },
  imagem: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Filme', filmeSchema);