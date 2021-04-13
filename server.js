const express = require('express');
const{ uuid } = require('uuidv4');

const server = express();

server.use(express.json())

contatos = [];

server.get('/', function (request, response)
{
   let nome =  request.query.nome
    response.json(contatos);
})

server.get('/:id', function(request, response)
{
    const id = request.params.id;
    const result = contatos.filter(contato => contato.id == id);
    response.json(result);
})

    server.post('/', function(request, response)
    {
        const nome = request.body.nome;
        const telefone = request.body.telefone;

        contato = {
            id: uuid(),
            nome, 
            telefone
        };

        contatos.push(contato);

        response.status(201).send();
    })

server.listen(process.env.PORT || 3000);