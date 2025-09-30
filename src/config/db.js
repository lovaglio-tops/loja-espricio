const { get } = require("http");
const sql = require("mssql");
const config = {
    user: 'sa',
    password: '123456789',
    server: 'localhost',
    database: 'LojaDB',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}


async function getConnection() {
    try {

        const pool = await sql.connect(config);
        return pool;

    } catch (error) {
        console.error('erro na conexão do SQL server:', error);
    }
};
module.exports = {sql, getConnection};
// (async () => {
//     const teste = await getConnection();

//     if (teste) {
//         console.log('conexão bem sucedida');

//     }
// })()