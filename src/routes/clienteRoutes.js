const express = require("express");
const router = express.Router();
const { clienteController } = require("../controllers/clienteControler");

//get /produtos -> lista todos os produtos 
router.get("/clientes", clienteController.listarCliente);
router.post("/clientes", clienteController.criarCliente)

module.exports = { clienteRoutes: router };