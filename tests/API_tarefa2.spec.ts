import { test, expect } from '@playwright/test';

test.describe('API Tests - Tarefa 2', () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  // Testes para GET
  test('GET /users - Validar lista de usuários', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('id');
    expect(body[0]).toHaveProperty('name');
  });

  // Testes para POST
  test('POST /posts - Criar um novo post', async ({ request }) => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const response = await request.post(`${BASE_URL}/posts`, {
      data: newPost,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('title', newPost.title);
    expect(body).toHaveProperty('body', newPost.body);
    expect(body).toHaveProperty('userId', newPost.userId);
  });

  // Testes para PUT
  test('PUT /posts/1 - Atualizar um post existente', async ({ request }) => {
    const updatedPost = {
      id: 1,
      title: 'foo updated',
      body: 'bar updated',
      userId: 1,
    };
    const response = await request.put(`${BASE_URL}/posts/1`, {
      data: updatedPost,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body).toHaveProperty('id', updatedPost.id);
    expect(body).toHaveProperty('title', updatedPost.title);
    expect(body).toHaveProperty('body', updatedPost.body);
    expect(body).toHaveProperty('userId', updatedPost.userId);
  });

  // Testes para DELETE
  test('DELETE /posts/1 - Deletar um post existente', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/posts/1`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body).toEqual({}); // JSONPlaceholder retorna um objeto vazio para DELETE bem-sucedido
  });
});

