const express = require(`express`);

const { v4: uuid } = require(`uuid`);

const app = express();

app.use(express.json());


let customers = [];

app.post(`/account`, (request,response)=>{

    const { cpf,name} = request.body;

    const id = uuid();

    customers.push({
        id,
        cpf,
        name,
        statement: [],
    })

})