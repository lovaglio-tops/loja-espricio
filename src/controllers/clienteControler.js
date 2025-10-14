const { clienteModel } = require("../model/clienteModel");

const clienteController = {
    //--------------------
    //listar todos os produtos
    // get/produtos
    //--------------------
    listarCliente: async (req, res) => {
        try {

            const clientes = await clienteModel.buscarTodos();

            res.status(200).json(clientes);

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
            "nomeCliente": "valor",
            "cpfCliente": 0.00
        }
    */
    //--------------------
    criarCliente: async (req, res) => {
        try {

            const { nomeCliente, cpfCliente } = req.body;

            const cliente = await clienteModel.buscarCpf(cpfCliente);

            if (nomeCliente == undefined||cpfCliente==undefined|| isNaN(cpfCliente)) {
                return res.status(400).json({error:'campos obrigatorios não prenchidos!'});
            }
            if (cliente.length > 0) {
                return res.status(409).json({erro:"CPF já cadastrado"});
            }

            await clienteModel.inserircliente(nomeCliente,cpfCliente);

            res.status(201).json({message:'cliente cadastrado com sucesso!'});

        } catch (error) {
            console.error('erro ao cadastrar cliente:',error);
            res.status(500).json({error:'erro no servidor ao cadastrar cliente'})
            
        }
    }
}

module.exports = { clienteController };