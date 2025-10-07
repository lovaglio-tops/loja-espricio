const { Decimal } = require("mssql");
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
    },

    inserirProduto: async(nomeProduto, precoProduto) =>{
        try {
            const pool = await getConnection();

            let querySQL = 'INSERT INTO produtos(nomeProduto, precoProduto) values(@nomeProduto,@precoProduto)'
            
            await pool.request()
            .input('nomeProduto',sql.VarChar(100),nomeProduto)
            .input('precoProduto',sql.Decimal(10,2), precoProduto)
            .query(querySQL);
        } catch (error) {
             console.error('erro ao inserir produto:', error);
             throw error;//passa o erro para o controler tratar
             
        }
    }
}

module.exports={produtoModel}

// async function teste() {
//     const produtos = await produtoModel.buscarTodos();

//     console.log(produtos);

// }

// teste();