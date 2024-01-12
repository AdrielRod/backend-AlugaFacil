# Aluga Facil

Api simples que oferece um CRUD completo em torno de um sistema de alugar carros.

## Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação](#instalação)
- [Executando a Aplicação](#executando-a-aplicação)
- [Rotas da API](#rotas-da-api)

## Sobre

Com o aluga fácil você pode adicionar carros para alugar, atualizar os carros e também deletar os mesmos. O usuário é capaz de fazer reservas em carros, cancelar reservas. A api conta com sistema de login e registro.

## Tecnologias Utilizadas

Liste as principais tecnologias e ferramentas utilizadas no seu projeto.

- Node.js
- Express.js
- MongoDB 

## Configuração do Ambiente

No src/app.js. Você encontrará o DB Connection. Deve seguir todos os passos para criar um cluster dentro do mongoDB e depois, com a senha e o link, você deve substituir.

## Instalação
Clone o projeto
```
git clone https://github.com/AdrielRod/backend-AlugaFacil
```

Rode o projeto
```
/// yarn
yarn install

/// npm
npm install 
```

## Executando a Aplicação
```
yarn dev
```

# Rotas da API

Aqui estão algumas das principais rotas disponíveis na API:


### 1. Fazer LOGIN

- **Rota:** `POST /sessions`
- **Descrição:** Faz login/registro
- **Parâmetros do Corpo (JSON):**
  ```json
  {
    "nome": "nome",
    "email": "email",
  }

### 2. Cadastrar um novo carro

- **Rota:** `POST /cars`
- **Descrição:** Cadastra um novo carro no sistema.
- **Parâmetros do Header** user_id = UID do usuário logado.
- **Parâmetros do Corpo (JSON):**
  ```json
  {
    "modelo": "Nome do Modelo",
    "ano": 2022,
    "placa": "ABC1234",
    "cor": "Preto",
    "disponivel": true,
    "foto": "URL da foto"
  }

### 3. Filtrar os carros

- **Rota:** `GET /cars?disponivel=boolean`
- **Descrição:** Filtra os carros pela disponibilidade
- **Parâmetros da Query:** ?disponibilidade=

### 4. Deletando um carro

- **Rota:** `DELETE /cars`
- **Descrição:** Delete um carro do sistema
- **Parâmetros do Header** user_id = UID do usuário logado.
- **Parâmetros do Corpo (JSON):**
  ```json
  {
    "car_id": "id do carro",
  }

### 5. Atualizando um carro
- **Rota:** `PUT /cars/:car_id`
- **Descrição:** Atualiza um carro no sistema
- **Parâmetros do Header** user_id = UID do usuário logado.
- **Parâmetros do Corpo (JSON):**
  ```json
  {
    "modelo": "Nome do Modelo",
    "ano": 2022,
    "placa": "ABC1234",
    "cor": "Preto",
    "disponivel": true,
    "foto": "URL da foto"
  }

### 7. Lista seus carros

- **Rota:** `GET /dashboard`
- **Descrição:** Lista os seus carros postados
- **Parâmetros do Header** user_id = UID do usuário logado.

### 8. Reservando um carro

- **Rota:** `POST /cars/:car_id`
- **Descrição:** Reserva um carro
- **Parâmetros do Header** user_id = UID do usuário logado.
- **Parâmetros do Corpo (JSON):**
  ```json
  {
    "date": "data - 20/09",
  }

### 9. Buscando reservas

- **Rota:** `POST /reserves`
- **Descrição:** Busca as suas reservas
- **Parâmetros do Header** user_id = UID do usuário logado.

### 10. Deletando reserva

- **Rota:** `POST /reserves/cancel`
- **Descrição:** Cancela uma reserva
- **Parâmetros do Header** user_id = UID do usuário logado.
- **Parâmetros do Corpo (JSON):**
  ```json
  {
    "reserve_id": "uid da reserva",
  }
