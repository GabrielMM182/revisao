const { lista ,salvarGatos } = require("../../dados");

const mesAleatorio = (req, res) => {
    const randomMonth = lista[Math.floor(Math.random() * lista.length)];
    res.json({ month: randomMonth })
}

const consultarTodosOsAnimais = (req, res) => {
  res.json(lista);
};

const consultarAnimalEspecifico = (req, res) => {
    const animais = lista.find(
        (animais) => animais.id === Number(req.params.idConsulta)
    );

    if (animais === undefined) {
        res.status(404);
        res.json({erro: "esse animal passado ->" + req.params.idConsulta + "não existe"});
        return
    }

    res.json(animais);
};

module.exports = {
  consultarTodosOsAnimais,
  consultarAnimalEspecifico,
  mesAleatorio
};
