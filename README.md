# Gympoint
Desafio final para certificação do bootcamp.


## Sobre o desafio

A aplicação é um gerenciador de academia, o **Gympoint**.

Foi desenvolvida utilizando a especificação padrão do desafio, nehuma funcionalidade opcional ou nova foi incluída.
O ambiente de desenvolvimento e testes utilizado foi Ubuntu 18.04 e android 8.1.0.


### Sobre as ferramentas

Aplicação utiliza o [Express](https://expressjs.com/), além das seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (PostgreSQL);
 
### Funcionalidades do usuário administrador

Abaixo estão descritas as funcionalidades da aplicação para o usuário (administrador). 
Todas as funcionalidades do administrador são acessadas somente pela web (pasta frontend), e o usuário deve ser autenticado.

#### 1. Autenticação

Foi criado um usuário administrador utilizando a funcionalidade de [seeds do sequelize](https://sequelize.org/master/manual/migrations.html#creating-first-seed), email: admin@gympoint.com, password: 123456.
Conforme especificado no desafio, esse usuário é usado em todos os logins, não existe uma tela para cadastro de novos usuários.

- A autenticação é feita utilizando JWT.

#### 2. Cadastro de alunos

Permite ao administrador manter (cadastrar/atualizar/excluir) alunos na aplicação, utiliza a tabela no banco de dados chamada `students`.

O cadastro de alunos só pode ser feito com o administrador autenticado na aplicação.
A exclusão só é permitida se o aluno não possui nenhuma matrícula ou pergunta cadastrada.

#### 3. Gestão de planos

Permite ao administrador manter (cadastrar/atualizar/excluir) planos, utiliza a tabela no banco de dados chamada `plans`.
A exclusão só é permitida se o plano não está sendo usado em nenhuma matrícula.

Foram criados 3 planos de exemplo utilizando a funcionalidade de [seeds do sequelize](https://sequelize.org/master/manual/migrations.html#creating-first-seed):

- `Start`: Plano de 1 mês por R\$129;
- `Gold`: Plano de 3 meses por R\$109/mês;
- `Diamond`: Plano de 6 meses por R\$89/mês;

#### 4. Gestão de matrículas

Apesar do aluno estar cadastrado na plataforma, isso não significa que o mesmo tem uma matrícula ativa e que pode acessar a academia.

Essa funcionalidade permite ao administrador manter um cadastro de matrículas por aluno, utiliza a tabela no banco de dados chamada `enrollments`.

A **data de início** da matrícula deve ser escolhida pelo usuário.

A **data de término** e **preço** da matrícula são calculadas com base no plano selecionado.

Quando o administrador **realiza uma matrícula** para o aluno, esse recebe um e-mail com detalhes da sua inscrição na academia com o plano, data de término, valor e uma mensagem de boas-vidas.

#### 5. Responder pedidos de auxílio

O aluno pode criar pedidos de auxílio para a academia, está funcionalidade permite ao administrador responder esses pedidos.
Utiliza a tabela no banco de dados chamada `help_orders`.


### Funcionalidades do aluno

Abaixo estão descritas as funcionalidades para alunos.
Todas as funcionalidades do aluno são acessadas somente pelo mobile (pasta mobile).
O aluno não se autentica no sistema, ou seja, não possui senha.
Deve apenas informar seu ID de cadastro (ID do banco de dados).

#### 1. Checkins

Quando o aluno chega na academia o mesmo realiza um check-in.
Esse check-in serve para monitorar quantas vezes o usuário frequentou a academia na semana.
Utiliza a tabela no banco de dados chamada `checkins`.

O usuário só pode fazer **5 checkins** dentro de um período de 7 dias corridos.

#### 2. Pedidos de auxílio

O aluno pode criar pedidos de auxílio para a academia em relação a algum exercício, alimentação ou instrução qualquer.
Utiliza a tabela no banco de dados chamada `help_orders`.

Quando um pedido de auxílio for respondido, o aluno recebe um e-mail com a pergunta e resposta da academia.
