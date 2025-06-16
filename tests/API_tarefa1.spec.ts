import { test, expect } from '@playwright/test';

test.describe('API Tests - Tarefa 1', () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  test('GET /posts/1 - Validar status code, headers e corpo da resposta (positivo)', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body).toHaveProperty('userId');
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
  });

  test('GET /posts/9999 - Validar status code para recurso inexistente (negativo)', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/9999`);
    expect(response.status()).toBe(404);
    const body = await response.json();
    expect(body).toEqual({}); // JSONPlaceholder retorna um objeto vazio para 404
  });

  test('GET /posts/abc - Validar status code para requisição inválida (negativo)', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts/abc`);
    expect(response.status()).toBe(404); // JSONPlaceholder retorna 404 para IDs não numéricos
  });
});

