const express = require(`express`);

const { v4: uuid } = require(`uuid`);

const app = express();

app.use(express.json());

let customers = [];

function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers

    const customer = customers.find(
        (customer) => customer.cpf === cpf 
    )

    if(!customer){

        return response.status(400).json({error: "custumer already exists!"});
    }

    request.customer = customer;

    return next();
}

app.post(`/account`, (request,response)=>{

    const { cpf,name} = request.body;

    const custumerAlreadyExists = customers.some( 
        
        (custumer) => custumer.cpf === cpf
    );

    if(custumerAlreadyExists){

    }

    customers.push({
        id: uuid(),
        cpf,
        name,
        statement: [],
    })

    return response.status(201).json(customers);

});

app.get(`/statement`,verifyIfExistsAccountCPF, (request,response)=>{

    const { customer } = request;
    return response.json(customer.statement);

});

app.listen(3333);