# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas

1- Anderson tem 64 anos, é aposentado e um dos seus principais hobbies é fazer caminhada. Seus desejos são viajar mais, ver a família bem e continuar aproveitando a vida, mesmo sendo uma pessoa muito impaciente e imperativo. Ele busca encontrar uma agência que possa financiar um veículo mais barato, analisar e ou revender.

2 - Ana tem 25 anos, atualmente trabalha como publicitária e ama sair com seus amigos. Ana é uma pessoa muito ansiosa e impaciente, e uas vontades pessoais são de ter independência financeira e para sua vida pessoal, fazer muitas viagens e se casar. O objetivo de Ana ao usar o site é adquirir informações quanto aos valores e opções de financiamento de um veículo.

3 - Arthur Augusto de Faria tem 21 anos e trabalha atualmente como analista de garantia. Arthur tem uma personalidade única, sendo muito paciente porém ao mesmo tempo ansioso, sendo os seus maiores objetivos criar uma família, ter liberdade financeira e conquistar reconhecimento geral. Seu objetivo utilizando o site é obter facilidade para alcançar um veículo que almeja.

4- Richard Braz é um homem experiente de 42 anos que trabalha como motorista de alimentos Valle. Sua atividade de lazer favorita é pescar e ainda assim sua personalidade é de uma pessoa impaciente e imperativa. Mesmo sendo um homem mais experiente, ele ainda almeja ter uma fazenda e viver dela com sua esposa. Seu objetivo ao usar o site da MoneyCar é se sentir acolhido e confortável para ter confiança no trabalho da empresa.

5 - Riane Silva é uma mulher de 44 anos que trabalha como radiologista e tem como hobbie favorito viajar e conhecer vários países diferentes! Riane se considera uma pessoa muito honesta porém impaciente, e acredita que seu principal objetivo ao usar nosso site ser tratada com respeito e carinho, tendo o sentimento de valorização e principalmente, achar um veículo com preços bacanas para financiamento.

6 - Levi Ribeiro é um homem de 50 anos que trabalha como Administrador na área de suprimentos na empresa Valle. Levi é um homem "zen com a vida", se considera uma pessoa imperativa e honesta, e seu sonho é ver seus filhos sendo pessoas honestas e podendo viver bem. Seu objetivo ao usar o site é conseguir um financiamento que esteja dentro de seu plano financeiro sem juros abusivos.

> Enumere e detalhe as personas da sua solução. Para
> tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
>
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
> Lembre-se que você deve ser enumerar e descrever precisamente e
> personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO DONO DE AGENCIA DE CARROS | QUERO/PRECISO Oferecer para meu cliente uma plataforma para calculo de financiamento | PARA Facilitar o processo de compra

| EU COMO CLIENTE | QUERO/PRECISO saber exatamente o valor final do meu veiculo | PARA me programar financeiramente

| EU COMO CLIENTE | QUERO/PRECISO Ter um norte dos valores do financiamento e poder avaliar meus créditos | PARA Conseguir saber sobre os valores e financeiro

| EU COMO CLIENTE | QUERO/PRECISO Ver os tipos de veículos disponíveis para financiamento. | PARA Para escolher o veículo que quero financiar.

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
>
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID | Descrição do Requisito | Prioridade |

| RF-001 | Permitir que o usuário simule o financiamento de um veículo | ALTA |
| RF-002 | Permitir que o usuário envie documentos para análise de crédito | ALTA |
| RF-003 | Exibir opções de veículos disponíveis com filtros por modelo, marca, ano e preço | ALTA |
| RF-004 | Permitir que o administrador cadastre, edite ou remova veículos do sistema | MÉDIA |
| RF-005 | Exibir de forma clara e detalhada as condições de financiamento (parcelas, taxas, etc.) | ALTA |
| RF-006 | Enviar confirmação por e-mail após envio da proposta de financiamento | MÉDIA |
| RF-007 | Permitir que o analista de crédito acesse e avalie as propostas enviadas | ALTA |

### Requisitos não Funcionais

| RF-001 | O sistema deve ser responsivo e funcionar corretamente em dispositivos móveis | ALTA |
| RF-002 | O tempo de carregamento das páginas não deve exceder 3 segundos | MÉDIA |
| RF-003 | As informações do usuário devem ser armazenadas de forma segura (criptografadas) | ALTA |
| RF-004 | O sistema deve estar disponível 99% do tempo | MÉDIA |
| RF-005 | A interface deve ser acessível, com contraste adequado e suporte a leitores de tela | MÉDIA |
| RF-006 | O sistema deve utilizar linguagem clara e objetiva, evitando termos técnicos excessivos | MÉDIA |

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais
>   (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais
>   (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID  | Restrição                                             |
| --- | ----------------------------------------------------- |
| 01  | O projeto deverá ser entregue até o final do semestre |
| 02  | Não pode ser desenvolvido um módulo de backend        |

> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
>
> **Links Úteis**:
>
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
