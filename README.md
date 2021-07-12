
## FinAPI - Financeira 
 Uma api para uma financeira, realizando o cadastro de uma conta, consulta de extrato bancario, realizar depósito.

---

## Instruções 
    URL para acessar as routes: http://localhost:3333

    route para criar uma conta: POST - http://localhost:3333/account
        Ex.: Os dados devem ser passando via JSON no body
        body
        {
            "name": "João",
            "cpf": "333.333.333.33"
        }
    
    route para consultar o statement do cliente: GET - http://localhost:3000/statement
        deve passar o cpf pelo header
        Ex.:
        header{
            cpf: "333.333.333.33"
        }

    route para realizar um deposito na conta: POST - http://localhost:3333/deposit
        deve passar o cpf pelo header
        Ex.:
        header
        {
            cpf: "333.333.333.33"
        }
        
        Ex.: Os dados devem ser passando via JSON no body
        body
        {
            "description": "deposito joao",
            "amount": 1203.00
        }
    
    route para realizar um saque na conta: POST - http://localhost:3333/withdraw
        deve passar o cpf pelo header
        Ex.:
        header
        {
            cpf: "333.333.333.33"
        }
        
        Ex.: Os dados devem ser passando via JSON no body
        body
        {
            "amount": 120.00
        }
            

### Requisitos 

- [ X ] Deve ser possivel criar uma conta
- [ X ] Deve ser possivel buscar o extrato bancário do cliente
- [ X ] Deve ser possivel realizar um depósito
- [ X ] Deve ser possivel realizar um saque
- [ ] Deve ser possivel busca o extrato bancário do cliente por data
- [ ] Deve ser possivel atualizar dados da conta do cliente
- [ ] Deve ser possivel obter dados da conta do cliente
- [ ] Deve ser possivel deletar uma conta

## Regras de negócio

- [ X ] Não deve ser possivel cadastrar uma conta com CPF já existente
- [ X ] Não deve ser possivel fazer depósito em uma conta não existente
- [ X ] Não deve ser possivel buscar extrato em uma conta não existente
- [ X ] Não deve ser possivel fazer saque em ua conta não existente
- [ ] Não deve ser possivel excluir uma conta não existente
- [ X ] Não deve ser possivel fazer saque quando o saldo for insuficiente 


# Victor Montenegro 

## Olá, tudo bem! :wave:
    Eu sou João Victor Montenegro Rocha, mas pode me chamar de João. Atualmente desenvolvendo aplicações web
    com nodejs e sempre em busca de crescimento e aprimoramento profissional e pessoal. 

    Estou disposto a trabalhar em um ambiente que proporcione conhecimento e crescimento profissional. Tenho como 
    objetivo de me atualizar para novas tecnologias e poder ajudar a comunidade e os novos developers.

 <br/> :purple_heart: Buscando colaborar com projetos no back-end, utilizando o framework nodejs.
 <br/> :blush: Com o que eu puder ajudar vou ajudar!
 <br/> :computer: O que estou aprendendo: javaScript, MongoDB, MySQL, PostgreSQL, nodejs/TypeScript.
 <br/> 💬  &nbsp; Sobre mim: Curto tecnologias,podCasts, games, seriados e animações. 
 <br/> :email: Entre em contato comigo: [![Linkedin Badge](https://img.shields.io/badge/-VictorMontenegro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/joao-victor-montenegro-595791194/)](https://www.linkedin.com/in/joao-victor-montenegro-595791194/) 
 [![Gmail Badge](https://img.shields.io/badge/-jvcmontenegro67@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=victor:jvcmontenegro67@gmail.com)](victor:jvcmontenegro67@gmail.com)
