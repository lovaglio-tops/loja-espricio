const express = require("express");
const router = express.Router();
const { produtoController } = require("../controllers/produtosControler");
//GET /produtos -> Lista todos os produtos
router.get("/produtos", produtoController.listarProdutos);
//POST /produtos -> Cria um novo produto
router.post("/produtos", produtoController.criarProduto);
// PUT /produtos/idProdutos -> atualizar um produto

router.put("/produtos/:idProduto", produtoController.atulizarProduto);
router.delete("/produtos/:idProduto", produtoController.deletarProduto);
module.exports = { produtoRoutes: router };