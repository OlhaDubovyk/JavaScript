const axios = require('axios');

// Базова адреса безкоштовного відкритого API
const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('JSONPlaceholder API — тести через axios + Jest', () => {
  // ───────────────────────── GET ─────────────────────────

  // Запит 1: GET /posts — отримати всі пости
  test('GET /posts → 200, повертає масив зі 100 постів', async () => {
    const response = await axios.get(`${BASE_URL}/posts`);

    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data).toHaveLength(100);

    const firstPost = response.data[0];
    expect(firstPost).toHaveProperty('userId');
    expect(firstPost).toHaveProperty('id');
    expect(firstPost).toHaveProperty('title');
    expect(firstPost).toHaveProperty('body');
    expect(typeof firstPost.title).toBe('string');
  });

  // Запит 2: GET /posts/1 — отримати один пост за id
  test('GET /posts/1 → 200, повертає пост з id = 1', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);

    expect(response.status).toBe(200);

    expect(response.data).toMatchObject({ id: 1, userId: 1 });
    expect(typeof response.data.title).toBe('string');
    expect(response.data.title.length).toBeGreaterThan(0);
    expect(typeof response.data.body).toBe('string');
  });

  // Запит 3: GET /users/1 — отримати користувача (перевірка вкладених об'єктів)
  test('GET /users/1 → 200, повертає коректний обʼєкт користувача', async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('username');

    expect(response.data.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    expect(response.data.address).toHaveProperty('city');
    expect(response.data.company).toHaveProperty('name');
  });

  // ───────────────────────── POST ─────────────────────────

  // Запит 4: POST /posts — створити пост
  test('POST /posts → 201, створює пост і повертає надіслані дані', async () => {
    const newPost = {
      title: 'QA automation',
      body: 'Testing JSONPlaceholder with axios',
      userId: 1,
    };

    const response = await axios.post(`${BASE_URL}/posts`, newPost);

    expect(response.status).toBe(201);

    expect(response.data).toMatchObject(newPost);
    expect(response.data.id).toBe(101);
  });

  // Запит 5: POST /comments — створити коментар
  test('POST /comments → 201, створює коментар і повертає надіслані дані', async () => {
    const newComment = {
      postId: 1,
      name: 'Test comment',
      email: 'olha@example.com',
      body: 'This is a test comment',
    };

    const response = await axios.post(`${BASE_URL}/comments`, newComment);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);

    expect(response.data.id).toBeDefined();
    expect(typeof response.data.id).toBe('number');
  });
});