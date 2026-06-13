const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const filmeRoutes = require('./routes/filmeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', filmeRoutes);
app.get('/teste', (req, res) => {
  res.send('API OK');
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, '0.0.0.0', () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((erro) => {
    console.log('Erro ao conectar no MongoDB:', erro);
  });