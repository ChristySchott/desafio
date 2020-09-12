<h1 align="center"><img alt="Escrito webjump com uma exclamação do lado direito." src="https://webjump.com.br/wp-content/uploads/2018/09/logo_webjump.png" /></h1>

<h1 align="center">
 :computer: Desafio Webjump :computer:
</h1>

<p align="center">
  <a href="#📦-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-indo%alem">Indo além</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

### 📦 Instalação

Para rodar o projeto, comece clonado o repositório na sua máquina.

```
$ git clone https://github.com/ChristySchott/desafio.git
```

Agora navegue até a pasta `web` do repositório e instale todas as dependências

```
$ yarn install

ou

$ npm install
```

Para rodar o server execute o seguinte comando no terminal:

```
$ yarn dev:server
```
> :warning: Caso não tenha o json-server instalado, execute o seguinte comando:

```
$ npm install -g json-server 
```

Agora você pode executar a aplicação:

```
yarn start
```
### :computer: Tecnologias

Para o desenvolvimento do projeto, procurei utilizar tecnologias que atualmente fazem parte do meu dia-a-dia no trabalho. 
Aliando isso à necessidade de gerenciamento de estado e componentização na aplicação, optei por utilizar o React.

Pensando na facilidade para escalar o projeto e em todos o benefício de uma tipagem mais forte que o TypeScript funciona, utilizei esse superset durante todo o desenvolvimento.

Para poder trabalhar com a API em modo de desenvolvimento, sem a necessidade de fazer o build do projeto para rodar as requisições, eu recriei a API do desafio com `json-server`. Esse gerador de API fake me auxiliou muito na hora de aplicar os filtros e trabalhar com paginação e ordenação dos produtos.

Além disso, vale ressaltar que utilizei duas abordagens para tratar os resultados retornados da API. A primeira delas foi utilizando rotas aninhadas, a partir do `react-router-dom`, e pegando o valor do parâmetro da rota para filtrar por categoria.

A segunda delas foi criando contextos para os dois outros filtros (por cor ou por tipo). Assim pude criar uma função para remover a categoria dinamicamente, como no gif abaixo.

![Gif mostrando os filtros sendo removidos](https://github.com/ChristySchott/desafio/blob/master/assets/filters.gif)

Fiz isso por acreditar que melhora em muito a experiência do usuário!

Para a estilização do projeto, decidi utilizar o `styled-components`, pois além de evitar arquivos `.css` no projeto, ele torna o código muito mais semântico para outros desenvolvedores, facilitando o uso de boas práticas.

Durante a fase final do desenvolvimento do projeto percebi que cometi um erro, pois o React é uma pedra no sapato quando se trata do SEO da aplicação. Já utilizei Gatsby e NextJS, que facilitam muito nesse ponto, porém não teria tempo de fazer as mudanças necessárias. Para tentar contornar isso, utilizei o `react-helmet`, uma lib que permite criar as tags `title` e `meta` em qualquer página da aplicação.

Para gerenciar o estado no projeto eu utilizei a Context API, do próprio React.

Também escrevi alguns testes bem simples com o `Jest` e a `React Testing Library`

### :rocket: Indo além

Para melhorar ainda mais a experiência do usuário, tomei a liberdade de criar algumas features para o projeto.

#### Filtros

Além de filtrar pelas categorias presentes no header da aplicação, permiti ao usuário filtros pelo tipo e também pela cor, podendo utilizar os dois filtros ao mesmo tempo e removê-los diretamente em tela.

![Gif mostrando os filtros sendo removidos](https://github.com/ChristySchott/desafio/blob/master/assets/filters.gif)

Também tornei funcional o input de busca localizado no header da página:

![Gif mostrando a busca sendo feita pelo input](https://github.com/ChristySchott/desafio/blob/master/assets/search.gif)

Além disso, o usuário pode filtrar também pelo celular!

![Gif mostrando a busca sendo feita pelo input no mobile](https://github.com/ChristySchott/desafio/blob/master/assets/mobile.gif)

Também é possivel ordenar os produtos pelo preço:

![Gif mostrando a ordenação dos produtos pelo preço](https://github.com/ChristySchott/desafio/blob/master/assets/order.gif)

#### Carrinho

Criei do zero uma funcionalidade para o usuário adicionar produtos ao carrinho, onde é feita a soma total e a quantidade dos produtos.

![Gif mostrando o funcionamento do carrinho na aplicação](https://github.com/ChristySchott/desafio/blob/master/assets/cart.gif)


#### Grid

Tornei funcional os dois ícones de grid presentes a partir do breakpoint de 768px, permitindo ao usuário alterar a forma que os produtos são exibidos em tela.

![Gif mostrando o usuário alternando entre as formas que os produtos são exibidos](https://github.com/ChristySchott/desafio/blob/master/assets/grid.gif)

#### Paginação

É possivel ao usuário navegar entre as páginas de produtos retornados.

![Gif mostrando o funcionamento da paginação na aplicação](https://github.com/ChristySchott/desafio/blob/master/assets/paginate.gif)

#### Dashboard e Footer

Tomei a iniciativa de criar uma página inicial onde o usuário pode navegar diretamente para os categorias ou para o carrinho.

![Página inicial da aplicação](https://github.com/ChristySchott/desafio/blob/master/assets/dashboard.PNG)

Criei também um footer, para completar a aplicação.

![Footer da aplicação](https://github.com/ChristySchott/desafio/blob/master/assets/footer.PNG)

#### Testes e acessibilidade

Apesar de simples, adicionei alguns testes que me ajudaram bastante durante o desenvolvimento do projeto. Adicionei também o husky e o lint-staged, para rodar o eslint e o tests antes do commit ser realizado.
Para a acessibilidade, sempre me esforço para escrever tags da forma mais semântica possível, além de caprichar nos textos alternativos das imagens.


### Agradecimento

Agradeço pela oportunidade de participar desse teste, qualquer dúvida que surgir durante a execução do projeto basta entrar em contato comigo!
