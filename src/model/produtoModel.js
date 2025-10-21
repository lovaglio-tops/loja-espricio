const { sql, getConnection } = require('../config/db');

const produtoModel = {
    buscarTodos: async () => {
        try {

            const pool = await getConnection(); // Cria conexão com o BD
            let sql = 'SELECT * FROM Produtos';

            const result = await pool.request().query(sql);

            return result.recordset;

        } catch (error) {
            console.error('Error ao buscar produtos:', error);
            throw error;// passa o erro para o controller tratar
        }
    },
    bucarUm: async (idProduto) => {
        try {
            const pool = await getConnection();

            const querySQL = 'select * from produtos where idProdutos = @idProduto;';

            const result = await pool.request()
                .input('idProduto', sql.UniqueIdentifier, idProduto)
                .query(querySQL);
            return result.recordset;
        } catch (error) {
            console.error('erro ao buscar o produto:', error);
            throw error;

        }
    },
    criarProduto: async (nomeProduto, precoProduto) => {
        try {
            const pool = await getConnection();

            let querySQL = 'INSERT INTO PRODUTOS(nomeProduto, precoProduto) VALUES(@nomeProduto, @precoProduto)';


            await pool.request()
                .input('nomeProduto', sql.VarChar(100), nomeProduto)
                .input('precoProduto', sql.Decimal(10, 2), precoProduto)
                .query(querySQL);

        } catch (error) {
            console.error('Erro ao inserir produto', error);
            throw error; //Passa o erro para o controller tratar
        }
    },
    atualizarProduto: async (idProduto, nomeProduto, precoProduto) => {
        try {
            const pool = await getConnection();

            const querySQL = `
                    update produtos 
                    set nomeProduto = @nomeProduto,
                        precoProduto = @precoProduto
                    where idProdutos = @idProduto
                 `;

            await pool.request()
                .input('idProduto', sql.UniqueIdentifier, idProduto)
                .input('nomeProduto', sql.VarChar(100), nomeProduto)
                .input('precoProduto', sql.Decimal(10, 2), precoProduto)
                .query(querySQL);


        } catch (error) {
            console.error('erro ao atualizar produto', error);
            throw error

        }
    },
    deletarProduto: async (idProduto) => {
        try {
            const pool = await getConnection();

            const querySQL = `DELETE from produtos where idProduto = @idProduto`

            await pool.request()
                .input('idProduto', sql.UniqueIdentifier, idProduto)
                .query(querySQL)
        } catch (error) {
            console.error('erro ao deletar o produto:', error);
            throw error;
        }
    }
}

module.exports = { produtoModel }
