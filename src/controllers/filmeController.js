const Filme = require('../models/filmeModel');

const listarFilmes = async (req, res) => {
  const filmes = await Filme.find();
  res.json(filmes);
};

const criarFilme = async (req, res) => {
  const filme = await Filme.create(req.body);
  res.status(201).json(filme);
};

const editarFilme = async (req, res) => {
  const filme = await Filme.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(filme);
};

const excluirFilme = async (req, res) => {
  await Filme.findByIdAndDelete(req.params.id);

  res.json({
    mensagem: 'Filme excluído com sucesso'
  });
};

module.exports = {
  listarFilmes,
  criarFilme,
  editarFilme,
  excluirFilme
};