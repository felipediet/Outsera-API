# Outsera API - Teste Técnico

Este projeto contém testes automatizados de API utilizando Playwright para validar operações CRUD na API JSONPlaceholder.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução dos Testes](#execução-dos-testes)
- [Cenários de Teste](#cenários-de-teste)
- [Relatórios](#relatórios)
- [API Testada](#api-testada)

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte de um teste técnico para validar conhecimentos em automação de testes de API. Os testes cobrem operações básicas de CRUD (Create, Read, Update, Delete) utilizando a API pública JSONPlaceholder.

## 🛠 Tecnologias Utilizadas

- **[Playwright](https://playwright.dev/)** - Framework para automação de testes
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem de programação
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)** - API REST fake para testes


## ⚙️ Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** para gerenciamento de pacotes

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Outsera-API
```

2. Instale as dependências:
```bash
npm install
```

3. Instale os navegadores do Playwright:
```bash
npx playwright install
```

## ⚙️ Configuração

### Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configuração, ajuste conforme necessário:

**Variáveis disponíveis:**
- `BASE_URL` - URL base da API (padrão: https://jsonplaceholder.typicode.com)
- `TEST_TIMEOUT` - Timeout para testes em milissegundos
- `EXPECT_TIMEOUT` - Timeout para assertions
- `RETRIES` - Número de tentativas em caso de falha

**Exemplo do arquivo .env:**
```env
BASE_URL=https://jsonplaceholder.typicode.com
TEST_TIMEOUT=30000
EXPECT_TIMEOUT=5000
RETRIES=2
```

## ▶️ Execução dos Testes

### Executar todos os testes
```bash
npx playwright test
```

### Executar testes específicos
```bash
# Executar apenas a Tarefa 1
npx playwright test API_tarefa1.spec.ts

# Executar apenas a Tarefa 2
npx playwright test API_tarefa2.spec.ts
```

### Executar com interface gráfica
```bash
npx playwright test --ui
```

### Executar em modo debug
```bash
npx playwright test --debug
```

### Gerar relatório
```bash
npx playwright show-report
```

## 🧪 Cenários de Teste

### Tarefa 1 - Validações GET

**Arquivo:** `tests/API_tarefa1.spec.ts`

1. **GET /posts/1 (Teste Positivo)**
   - Valida status code 200
   - Verifica headers Content-Type
   - Valida estrutura do corpo da resposta
   - Confirma presença dos campos: userId, id, title, body

2. **GET /posts/9999 (Teste Negativo)**
   - Valida status code 404 para recurso inexistente
   - Verifica resposta de objeto vazio

3. **GET /posts/abc (Teste Negativo)**
   - Valida status code 404 para ID inválido
   - Testa comportamento com parâmetros não numéricos

### Tarefa 2 - Operações CRUD

**Arquivo:** `tests/API_tarefa2.spec.ts`

1. **GET /users**
   - Valida listagem de usuários
   - Verifica se retorna array com dados
   - Confirma estrutura dos objetos de usuário

2. **POST /posts**
   - Cria um novo post
   - Valida status code 201
   - Verifica se os dados enviados são retornados corretamente

3. **PUT /posts/1**
   - Atualiza um post existente
   - Valida status code 200
   - Confirma que as alterações foram aplicadas

4. **DELETE /posts/1**
   - Remove um post
   - Valida status code 200
   - Verifica resposta de sucesso

## 📊 Relatórios

O projeto gera relatórios em diferentes formatos:

### Relatório HTML
- **Localização:** `playwright-report/index.html`
- **Visualização:** `npx playwright show-report`
- **Conteúdo:** Interface visual com detalhes dos testes, screenshots e traces

### Relatório JUnit
- **Localização:** `junit.xml`
- **Formato:** XML compatível com ferramentas de CI/CD
- **Uso:** Integração com pipelines de automação

### Resultados Detalhados
- **Localização:** `test-results/`
- **Conteúdo:** Logs detalhados, traces e artefatos dos testes

## 🌐 API Testada

**Base URL:** `https://jsonplaceholder.typicode.com`

### Endpoints Utilizados:

| Método | Endpoint      | Descrição                    |
| ------ | ------------- | ---------------------------- |
| GET    | `/posts/1`    | Obtém um post específico     |
| GET    | `/posts/9999` | Teste de recurso inexistente |
| GET    | `/users`      | Lista todos os usuários      |
| POST   | `/posts`      | Cria um novo post            |
| PUT    | `/posts/1`    | Atualiza um post existente   |
| DELETE | `/posts/1`    | Remove um post               |

### Estrutura de Dados:

**Post:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "título do post",
  "body": "conteúdo do post"
}
```

**User:**
```json
{
  "id": 1,
  "name": "Nome do usuário",
  "username": "username",
  "email": "email@example.com",
  // outros campos...
}
```

## 🎯 Validações Implementadas

- ✅ Status codes HTTP corretos
- ✅ Headers Content-Type
- ✅ Estrutura e conteúdo do JSON
- ✅ Presença de campos obrigatórios
- ✅ Tipos de dados corretos
- ✅ Comportamento para cenários negativos
- ✅ Operações CRUD completas

## 🚀 Executando em CI/CD

O projeto está configurado para execução em ambientes de CI/CD:

```yaml
# Exemplo para GitHub Actions
- name: Install dependencies
  run: npm install

- name: Install Playwright browsers
  run: npx playwright install

- name: Run tests
  run: npx playwright test

- name: Upload test results
  uses: actions/upload-artifact@v3
  with:
    name: test-results
    path: test-results/
```

## 📝 Observações

- Os testes utilizam a API JSONPlaceholder, que simula operações sem persistir dados reais
- As operações POST, PUT e DELETE retornam respostas simuladas
- O projeto está configurado para executar em paralelo para otimizar o tempo de execução
- Traces são coletados automaticamente em caso de falhas para facilitar o debug

---

**Desenvolvido para o Teste Técnico Outsera** 🚀
