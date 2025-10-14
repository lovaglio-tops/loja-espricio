const { sql, getConnection } = require("../config/db");

const clienteModel = {
    buscarTodos: async () => {
        try {

            const pool = await getConnection();//cria conexão com BD

            let sql = 'SELECT * FROM cliente';

            const result = await pool.request().query(sql);

            return result.recordset;

        } catch (error) {
            console.error('erro ao bsucar produtos:', error);
            throw error;//passa o erro para o controller tratar
        }
    },
    buscarCpf: async (cpfCliente) => {
        try {

            const pool = await getConnection();//cria conexão com BD

            let querySQL = 'SELECT * FROM cliente where cpfCliente = @cpfCliente';

            const result = await pool.request()
            .input('cpfCliente', sql.VarChar(100), cpfCliente)
            .query(querySQL);
            return result.recordset
        } catch (error) {
            console.error('erro ao buscar cpf:', error);
            throw error;//passa o erro para o controler tratar
        }
    },

    inserircliente: async (nomeCliente, cpfCliente) => {
        try {
            const pool = await getConnection();

            let querySQL = 'INSERT INTO cliente(nomeCliente,  cpfCliente) values(@nomeCliente,@cpfCliente)'

            await pool.request()
                .input('nomeCliente', sql.VarChar(50), nomeCliente)
                .input('cpfCliente', sql.Char(15), cpfCliente)
                .query(querySQL);
        } catch (error) {
            console.error('erro ao inserir cliente:', error);
            throw error;//passa o erro para o controler tratar

        }
    }
}

module.exports = { clienteModel }

// async function teste() {
//     const produtos = await produtoModel.buscarTodos();

//     console.log(produtos);

// }

// teste();