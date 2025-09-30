const { produtoModel } = require("../model/produtoModel");

const produtoController = {
    //--------------------
    //listar todos os produtos
    // get/produtos
    //--------------------
    listarProdutos: async (req, res) => {
        try {

            const produtos = await produtoModel.buscarTodos();

            res.status(200).json(produtos);

        } catch (error) {
            console.error('Erro ao listar produtos:', error);

            res.status(500).json({ message: 'erro ao buscar produtos.' })

        }
    }
}

module.exports = { produtoController };