const { produtoModel } = require("../model/produtoModel");

const produtoController = {
    //---------------
    //Listar todos os produtos
    //Get /produtos
    //---------------
    listarProdutos: async (req, res) => {
        try {
            const produtos = await produtoModel.buscarTodos();

            res.status(200).json(produtos);
        } catch (error) {
            console.error('Erro ao listar produtos', error);
            res.status(500).json({ message: 'Erro ao buscar produtos.' });
        }
    },
    //---------------
    //criar um novo produto
    //POST /Produtos
    //---------------
    /*
    {
        "nomeProduto": "valor",
        "precoProduto": 0.00
    }
    */
    criarProduto: async (req, res) => {
        try {
            const { nomeProduto, precoProduto } = req.body;

            if (nomeProduto == undefined || precoProduto == undefined || isNaN(precoProduto)) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos!' });
            }

            await produtoModel.criarProduto(nomeProduto, precoProduto);
            res.status(201).json({ message: 'Produto cadastrado com sucesso' });
        } catch (error) {
            console.error('Erro ao cadastrar produto', error);
            res.status(500).json({ erro: 'Erro no servidor ao cadastrar produto!' });
        }
    },
    //---------------
    //atualizar um produto
    //Put /Produtos.idProduto
    //nomeProduto e precoProduto são opciona
    //---------------
    /*
    {
        "nomeProduto": "valor",
        "precoProduto": 0.00
    }
    */
    atulizarProduto: async (req, res) => {
        try {
            const { idProduto } = req.params;
            const { nomeProduto, precoProduto } = req.body;

            const produto = await produtoModel.bucarUm(idProduto);

            if (!produto || produto.length !== 1) {
                return res.status(404).json({ erro: 'Produto não encontrado' });
            }

            const produtoAtual = produto[0];
            const nomeAtualizado = nomeProduto ?? produtoAtual.nomeProduto;
            const precoAtualizado = precoProduto ?? produtoAtual.precoProduto;

            await produtoModel.atualizarProduto(idProduto, nomeAtualizado, precoAtualizado);
            res.status(200).json({ message: 'produto atualizado com sucesso' });
        } catch (error) {
            console.error('erro ao atualizar o produto', error);
            res.status(500).json({ erro: ' erro no servidor ao atualizar produto' });

        }
    },
    deletarProduto: async (req, res) => {
        try {
            const { idProduto } = req.params;
            const produto = await produtoModel.bucarUm(idProduto);

            if (!produto || produto.length !== 1) {
                return res.status(404).json({ erro: 'Produto não encontrado' });
            }
            await produtoModel.deletarProduto(idProduto);

            res.status(200).json({ message: "PRODUTO DELETADO COM SUCESSO!" });
        } catch (error) {
            console.error('erro ao deletar o produto', error);
            res.status(500).json({ erro: ' erro no servidor ao deletar produto' });

        }
    }
}


module.exports = { produtoController };