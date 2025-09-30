const { sql, getConnection } = require("../config/db");

const produtoModel = {
    buscarTodos: async () => {
        try {

            const pool = await getConnection();//cria conexão com BD

            let sql = 'SELECT * FROM Produtos';

            const result = await pool.request().query(sql);

            return result.recordset;

        } catch (error) {
            console.error('erro ao bsucar produtos:', error);
            throw error;//passa o erro para o controller tratar
        }
    }
}

module.exports={produtoModel}

// async function teste() {
//     const produtos = await produtoModel.buscarTodos();

//     console.log(produtos);

// }

// teste();