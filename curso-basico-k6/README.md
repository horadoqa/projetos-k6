# Introdução aos testes de performance com k6


# User API

💡 Esse projeto foi construído acompanhando o curso básico de k6 do Fernando Papito. Com esse material, consegui compreender conceitos básicos da ferramenta e também as suas opções de aplicações. De fato, é um curso rápido, mas que abriu portas para que brevemente eu faça um curso mais aprofundado, já que este demonstrou todo o potencial da ferramenta e despertou o interesse pelos testes não funcionais.


## 🔖 Requisitos funcionais

### Cadastro

- [X] Deve retornar os id ao cadastrar um novo usuário
- [X] Deve retornar 201 ao cadastrar um novo usuário
- [X] Deve retornar 400 ao tentar cadastrar sem email e senha
- [X] Deve retornar 400 se o email for duplicado

| campos   | descrição                             | tipo     | obrigatório |
| :-----   | :------------------------------------ | :------- | :---------- |
| email    | usuário identificador único           | email    | sim         |
| password | senha do usuário                      | texto    | sim         |

## 🔖 Requisitos não funcionais

### Cadastro

- [x] O cadastro com sucesso deve ocorrer em até 2 segundos
- [x] Cadastros sem sucesso devem ocorrer em até 2 segundos
- [x] Deve poder cadastrar até 100 usuários simultâneos
- [x] A margem de erro no cadastro deve ser de pelo menos 1%

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Express] - framework onde a API foi construída
- [MongoDB] - Banco de dados (Não relacional)
- [k6] - ferramenta para teste de carga, performance, stress etc...

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Para liberar o gerenciador de pacotes Yarn:

```
corepack enable
```

Execute os comandos abaixo para instalar das dependências do projeto:

```sh
cd curso-k6-basico/api
yarn install
yarn dev
```



---


