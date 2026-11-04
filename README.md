# Mini Loja

Projeto desenvolvido como para um teste técnico para uma vaga de estágio em desenvolvimento Front-end.

A aplicação consiste em um mini catálogo de produtos que consome dados de uma API. Os produtos são exibidos em uma lista e, ao selecionar um deles, suas informações detalhadas são apresentadas em um painel separado.

## Funcionalidades

- Listagem de produtos.
- Consumo da FakeStore API utilizando `fetch()`.
- Exibição de imagem, título e preço dos produtos.
- Visualização dos detalhes de um produto selecionado.
- Nova requisição à API ao selecionar um produto.
- Indicador de carregamento durante as requisições.
- Tratamento básico de erros.
- Destaque visual do produto selecionado.
- Layout responsivo para desktop e dispositivos móveis.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- FakeStore API

## Estrutura do projeto

```text
Mini-loja/
├── index.html
├── style.css
├── app.js
└── README.md
```

### index.html

Responsável pela estrutura da página, contendo o cabeçalho, a área de listagem dos produtos e o painel de detalhes.

### style.css

Responsável pela aparência da aplicação, incluindo cores, espaçamentos, cards, Flexbox e adaptação do layout para dispositivos móveis.

### app.js

Responsável pelo comportamento da aplicação, incluindo as requisições para a API, criação dos produtos na tela e exibição dos detalhes do produto selecionado.

## Como executar

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.

Não é necessário instalar dependências.

## API utilizada

Os dados dos produtos são obtidos através da FakeStore API.

A aplicação realiza uma requisição para obter a lista de produtos e uma nova requisição quando o usuário seleciona um produto para visualizar seus detalhes.

## Responsividade

Em telas maiores, a aplicação apresenta a lista de produtos e o painel de detalhes lado a lado.

Em telas menores, o layout é reorganizado verticalmente para facilitar a visualização em dispositivos móveis.

## Autor

Cristhian Dutra