# Relatório de Testes de API com Playwright

## Introdução
Este relatório apresenta os resultados dos testes automatizados de API desenvolvidos utilizando a ferramenta Playwright. O objetivo foi validar endpoints de uma API de exemplo, incluindo verificações de status codes, headers e corpo de resposta para diferentes métodos HTTP (GET, POST, PUT, DELETE).

## Ambiente de Teste
- **Ferramenta de Automação:** Playwright
- **Linguagem:** TypeScript (configuração inicial do Playwright)
- **API de Exemplo:** JSONPlaceholder (https://jsonplaceholder.typicode.com)

## Tarefa 1: Validação de Endpoints Básicos

### Cenários Testados:
- **GET /posts/1 (Positivo):** Verificação de status code 200, tipo de conteúdo JSON e estrutura do corpo da resposta.
- **GET /posts/9999 (Negativo):** Verificação de status code 404 para recurso inexistente.
- **GET /posts/abc (Negativo):** Verificação de status code 404 para requisição com ID inválido.

### Resultados:
Todos os testes da Tarefa 1 foram executados com sucesso, validando corretamente os cenários positivos e negativos para o endpoint `/posts`.

## Tarefa 2: Múltiplos Endpoints e Métodos HTTP

### Cenários Testados:
- **GET /users:** Verificação de status code 200, tipo de conteúdo JSON e que a resposta é um array não vazio com a estrutura esperada.
- **POST /posts:** Criação de um novo post, verificando status code 201, tipo de conteúdo JSON e se o corpo da resposta contém os dados enviados e um novo ID.
- **PUT /posts/1:** Atualização de um post existente, verificando status code 200, tipo de conteúdo JSON e se o corpo da resposta reflete os dados atualizados.
- **DELETE /posts/1:** Exclusão de um post, verificando status code 200 e um corpo de resposta vazio.

### Resultados:
Todos os testes da Tarefa 2 foram executados com sucesso, demonstrando a capacidade de interagir com diferentes endpoints e métodos HTTP, e de validar as respostas de forma abrangente.

## Conclusão
O projeto demonstrou a eficácia do Playwright na automação de testes de API. Foram implementados testes para cobrir cenários de validação de endpoints, incluindo testes positivos e negativos, e a utilização de diferentes métodos HTTP. A capacidade de gerar relatórios detalhados facilita a interpretação dos resultados e a identificação de possíveis problemas na API.

## Anexos
- `tests/tarefa1.spec.ts`: Arquivo de teste da Tarefa 1.
- `tests/tarefa2.spec.ts`: Arquivo de teste da Tarefa 2.
- `playwright-report/index.html`: Relatório HTML detalhado dos testes (abrir em um navegador web).
- `junit.xml`: Relatório JUnit dos testes.

