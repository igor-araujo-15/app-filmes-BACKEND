const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const filmeRoutes = require('./routes/filmeRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', filmeRoutes);

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Filmes funcionando.' });
});

app.get('/teste', (req, res) => {
  res.send('API OK');
});

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((erro) => {
    console.log('Erro ao conectar no MongoDB:', erro);
  });