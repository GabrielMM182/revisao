const { lista, salvarGatos } = require("../../dados");

const consultarTodosOsAnimais = (req, res) => {
    res.json(lista);
}

module.exports = {
    consultarTodosOsAnimais
}