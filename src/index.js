const express = require("express");

const server = express();

server.use(express.json());

server.listen(3000);

server.get("/", (req, res) => {
    return res.send ({ message: "testeeee"})
});
