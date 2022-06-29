const { lista, salvarAnimais } = require("../../dados");

const animaisValidos = ["canino", "felino", "ave"];

const animalAleatorio = (req, res) => {
  const randomAnimal = lista[Math.floor(Math.random() * lista.length)];
  res.json({ animal: randomAnimal });
};

const consultarTodosOsAnimais = (req, res) => {
  res.json(lista);
};

const consultarAnimalEspecifico = (req, res) => {
  const animais = lista.find(
    (animais) => animais.id === Number(req.params.idConsulta)
  );

  if (animais === undefined) {
    res.status(404);
    res.json({
      erro: "esse animal passado ->" + req.params.idConsulta + "não existe",
    });
    return;
  }

  res.json(animais);
};

let proximoId = 16;

const cadastrarAnimais = (req, res) => {
  if (!req.body.nome) {
    res.status(400);
    res.json({ erro: "O campo 'nome' é obrigatorio" });
    return;
  }
  if (typeof req.body.nome !== "string") {
    res.status(400);
    res.json({ erro: "O campo 'nome' é preenchido com texto" });
    return;
  }
  if (!req.body.humor) {
    res.status(400);
    res.json({ erro: "O campo 'humor' é obrigatorio" });
    return;
  }
  if (typeof req.body.humor !== "string") {
    res.status(400);
    res.json({ erro: "O campo 'humor' é preenchido com texto" });
    return;
  }
  if (!req.body.especie) {
    res.status(400);
    res.json({ erro: "O campo 'especie' é obrigatorio" });
    return;
  }
  if (!animaisValidos.includes(req.body.especie)) {
    res.status(400);
    res.json({ erro: "a especie do animal está invalida" });
  }

  const novoAnimal = {
    id: proximoId,
    nome: req.body.nome,
    especie: req.body.especie,
    humor: req.body.humor
  };

  lista.push(novoAnimal);
  salvarAnimais()

  proximoId++;

  res.json(novoAnimal)
};

module.exports = {
  consultarTodosOsAnimais,
  consultarAnimalEspecifico,
  animalAleatorio,
  cadastrarAnimais,
};
