const produtoModel = {
    buscarTodos: async ()=>{
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
    criarProduto: async(nomeProduto, precoProduto)=>{
        try {
            const pool = await getConnection();

            let querySQL = 'INSERT INTO PRODUTOS(nomeProduto, precoProduto) VALUES(@nomeProduto, @precoProduto)';


            await pool.request()
            .input('nomeProduto', sql.VarChar(100), nomeProduto)
            .input('precoProduto', sql.Decimal(10,2), precoProduto)
            .query(querySQL);

        } catch (error) {
            console.error('Erro ao inserir produto',error);
            throw error; //Passa o erro para o controller tratar
        }
    }
}

module.exports= {produtoModel}
