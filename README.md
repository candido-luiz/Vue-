# todo-list

## Sobre 
Criação de uma aplicação baseado no desafio [ToDo-App](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/To-Do-App.md) do repositório [app-ideas](https://github.com/florinpop17/app-ideas), para por em prática meus estudos de gerenciamento de estados com o Vuex.

## Tecnologias
[Vue.js](https://vuejs.org/) para criação das interfaces.

[Vuex](https://vuex.vuejs.org/) para gerenciamento de estados da aplicação.

[Vue-Devtools](https://devtools.vuejs.org/) para depuração da aplicação.

## Instalando e Rodando a aplicação 

### Clone do repositório: 
```
git clone git@github.com:candido-luiz/vue-movie.git   
```
### Instalando: 
No diretório onde realizou o clone do projeto:

```
cd vue-movie-app
```
Instalar dependências:
```
npm install
```

### Rodando a aplicação:
```
npm run serve
``` 

### Compila e minimiza para produção
```
npm run build
```
## Features
- [x] Usuário pode ver um input onde ele pode criar um item to-do
- [x] Ao apertar o botão 'Add, o usuário adiciona um novo item a lista de to-do's
- [x] Usuário pode marcar/desmarcar um item como 'completo/terminado'
- [x] Usuário pode remover um item da lista de to-do's apertando o botão 'Delete'

#### Extra Features
- [ ] Usuário pode editar um item to-do
- [x] Usuário pode ver uma lista com todos os items terminados/completos
- [x] usuário pode ver uma lista com todos os items que ainda estão ativos
- [] Usuário pode ver a data de criação dos items
- [] Os items são persistidos no localStorage
