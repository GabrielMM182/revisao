const express = require("express");
const router = require("./routes/router")
const { logarRequisicao, travaSenhaGet } = require("./middleware/middleware")

const app = express();
app.use(express.json());

app.use(logarRequisicao);
app.use(travaSenhaGet);

app.use(router);

app.listen(3000);
