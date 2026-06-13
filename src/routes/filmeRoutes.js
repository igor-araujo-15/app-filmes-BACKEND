const express = require('express');
const router = express.Router();

const {
  listarFilmes,
  criarFilme,
  editarFilme,
  excluirFilme
} = require('../controllers/filmeController');

router.get('/filmes', listarFilmes);
router.post('/filmes', criarFilme);
router.put('/filmes/:id', editarFilme);
router.delete('/filmes/:id', excluirFilme);

module.exports = router;