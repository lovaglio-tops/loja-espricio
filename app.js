const express = require("express")
const app = express();
const PORT = 8081;
const {produtosRoutes} = require("./src/routes/produtoRoutes");
app.use(express.json());

app.use('/', produtosRoutes);

app.listen(PORT,()=>{
    console.log(`servidor rodando em http://localhost:${PORT}`);
    
});