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
        statement: [],
    })

    return response.status(201).send("conta criada");

})

app.listen(3333)