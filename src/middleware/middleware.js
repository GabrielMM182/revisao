// middleware para validação do corpo passando sua url e qual methodo http foi passado
const logarRequisicao = (req, res, next) => {
    console.log(req.method, req.url);
    console.log("O corpo da mensagem é:", req.body);
    next();    
}

const travaSenhaGet = (req, res, next) => {
    console.log("segundo intermediario", req.query);
    if ( req.method === "GET" || req.query.senha === "123456") {
      next();
    } else {
      res.status(401);
      res.json({ erro: "senha incorreta" })
    }
}

module.exports = {
    logarRequisicao,
    travaSenhaGet
}