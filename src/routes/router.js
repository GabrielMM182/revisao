const express = require("express");

const animaisController = require("../controller/gatos")

const router = express();

router.get("/gatos", animaisController.consultarTodosOsAnimais)

module.exports = router;