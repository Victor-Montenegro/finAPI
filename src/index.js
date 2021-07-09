const express = require(`express`);

const { v4: uuid } = require(`uuid`);

const app = express();

app.use(express.json());


let customers = [];

app.post(`/account`, (request,response)=>{

    const { cpf,name} = request.body;

    const custumerAlreadyExists = customers.some( 
        
        (custumer) => custumer.cpf === cpf
    );

    if(custumerAlreadyExists){

        return response.status(400).json({error: "custumer already exists!"});
    }

    customers.push({
        id: uuid(),
        cpf,
        name,
        statement: [{acao:"deposito",valor:2002.22}],
    })

    return response.status(201).json(customers);

});

app.get(`/statement/:cpf`, (request,response)=>{

    const { cpf } = request.params;

    const customer = customers.find( 
        custumer => custumer.cpf === cpf
    );

    return response.json(customer.statement);

});

app.listen(3333);