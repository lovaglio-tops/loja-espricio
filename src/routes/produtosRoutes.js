const express = require("express");
module.exports = {produtoRoutes: router};const router = express.Router();
const { produtoController } = require("../controllers/produtoController");

//GET /produtos -> Lista todos os produtos
router.get("/produtos", produtoController.listarProdutos);
//POST /produtos -> Cria um novo produto
router.post("/produtos", produtoController.criarProduto);
