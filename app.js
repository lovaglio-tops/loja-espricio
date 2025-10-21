const express = require("express")
const app = express();
const PORT = 8081;
const {clienteRoutes} = require("./src/routes/clienteRoutes");
const {produtoRoutes} = require("./src/routes/produtosRoutes");
app.use(express.json());

app.use('/', clienteRoutes);
app.use('/', produtoRoutes);

app.listen(PORT,()=>{
    console.log(`servidor rodando em http://localhost:${PORT}`);
    
});