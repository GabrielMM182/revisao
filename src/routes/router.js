const express = require("express");

const animaisController = require("../controller/gatos");

const router = express();

router.get("/animais", animaisController.consultarTodosOsAnimais);

router.get("/animais/:idConsulta", animaisController.consultarAnimalEspecifico);

router.get("/animaisRandom", animaisController.animalAleatorio)

router.post("/animais", animaisController.cadastrarAnimais);

module.exports = router;
