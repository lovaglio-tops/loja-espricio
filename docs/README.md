## api reference 

### produtos 

#### GET/produtos
-**Descriçao**: obtém uma lista de produtos
-**Responde**: Array de produtos

#### POST /produtos
-**Descrição**: Cria um novo produto
-**Body**:
```
{
    "nomeProduto": "produtoExemplo"
    "precoProduto": -.00
}
```
-**Response**:
```
{
    "message": "produto cadastrado com sucesso"
}
```


### clientes
## api reference 

### clientes 

#### GET/clientes
-**Descriçao**: obtém uma lista de clientes
-**Responde**: Array de clientes

#### POST /clientes
-**Descrição**: Cria um novo clientes
-**Body**:
```
{
    "nomeCliente": "clienteExemplo"
    "cpfCliente": "51891519808"
}
```
-**Response**:
```
{
    "message": "cliente cadastrado com sucesso"
}
```