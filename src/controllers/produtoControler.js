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
    },

    //--------------------
    //listar todos os produtos
    // get/produtos
    /*
        {
            "nomeProduto": "valor",
            "precoProduto": 0.00
        }
    */
    //--------------------
    criarProduto: async (req, res) => {
        try {

            const { nomeProduto, precoProduto } = req.body;

            if (nomeProduto == undefined||precoProduto==undefined|| isNaN(precoProduto)) {
                return res.status(400).json({error:'campos obrigatorios não prenchidos!'});
            }

            await produtoModel.inserirProduto(nomeProduto,precoProduto);

            res.status(201).json({message:'produto cadastrado com sucesso!'});

        } catch (error) {
            console.error('erro ao cadastrar produto:',error);
            res.status(500).json({error:'erro no servidor ao cadastrar produto'})
            
        }
    }
}

module.exports = { produtoController };