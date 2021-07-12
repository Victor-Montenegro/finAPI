const express = require(`express`);

const { v4: uuid } = require(`uuid`);

const app = express();

app.use(express.json());

let customers = [];

function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers;
    console.log(cpf);
    const customer = customers.find(
        (customer) => customer.cpf === cpf 
    )

    if(!customer){

        return response.status(400).json({error: "custumer already exists!"});
    }

    request.customer = customer;

    return next();
}

function getBalance(statement){

    const balance = statement.reduce((acc, operation)=>{

        if(operation.type == "credit"){
            
            return acc + operation.amount;
        }else{

            return acc - operation.amount;
        }
    },0);
    
    return balance;
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

app.post(`/deposit`, verifyIfExistsAccountCPF, (request,response)=>{

    const { description, amount } = request.body;

    const { customer } = request; 

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit",
    }

    customer.statement.push(statementOperation);

    return response.status(201).send();
});

app.post(`/withdraw`, verifyIfExistsAccountCPF, (request,response)=>{

    const { amount } = request.body;
    
    const { customer } = request;

    const balance = getBalance(customer.statement);

    if(balance < amount){

        return response.status(400).json({error: "Insufficient funds!"});
    }

    const statementOperation = {
        amount,
        created_at: new Date(),
        type: "debit",
    }

    customer.statement.push(statementOperation);

    return response.status(201).send();

});

app.get(`/statement/date`, verifyIfExistsAccountCPF, (request,response)=>{

    const { date } = request.query;

    const { customer } = request;

    const dateForm = new date(date);

    return response.json({date:date,date2:dateForm});
});

app.listen(3333);