const postsController = require('../controllers/PostsController');
const usersController = require('../controllers/UsersController');
const commentsController = require('../controllers/CommentsController');
const { expectSchema } = require('../helpers/schema');

const POST_SCHEMA = { userId: 'number', id: 'number', title: 'string', body: 'string' };

describe('JSONPlaceholder API - 10 tests with controllers', () => {
  test('1) GET /posts -> 200, list of 100 posts, each matches schema', async () => {
    const res = await postsController.getAll();

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data).toHaveLength(100);
    res.data.forEach((post) => expectSchema(post, POST_SCHEMA));
  });

  test('2) GET /posts/1 -> 200, single post with id 1', async () => {
    const res = await postsController.getById(1);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject({ id: 1, userId: 1 });
    expectSchema(res.data, POST_SCHEMA);
  });

  test('3) POST /posts -> 201, creates a post and returns id 101', async () => {
    const newPost = { title: 'QA automation', body: 'created via controller', userId: 1 };
    const res = await postsController.create(newPost);

    expect(res.status).toBe(201);
    expect(res.data).toMatchObject(newPost);
    expect(res.data.id).toBe(101);
  });

  test('4) PUT /posts/1 -> 200, fully replaces the post', async () => {
    const updated = { id: 1, title: 'updated title', body: 'updated body', userId: 1 };
    const res = await postsController.update(1, updated);

    expect(res.status).toBe(200);
    expect(res.data).toMatchObject(updated);
  });

  test('5) PATCH /posts/1 -> 200, updates only the title', async () => {
    const res = await postsController.patch(1, { title: 'patched title' });

    expect(res.status).toBe(200);
    expect(res.data.title).toBe('patched title');
    expect(res.data.id).toBe(1);
  });

  test('6) DELETE /posts/1 -> 200', async () => {
    const res = await postsController.delete(1);
    expect(res.status).toBe(200);
  });

  test('7) GET /posts/9999 -> 404 (negative test)', async () => {
    const res = await postsController.getById(9999);
    expect(res.status).toBe(404);
  });

  test('8) GET /users/1 -> 200, nested structure and valid email', async () => {
    const res = await usersController.getById(1);

    expect(res.status).toBe(200);
    expect(res.data.id).toBe(1);
    expect(res.data.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(res.data.address).toHaveProperty('city');
    expect(res.data.address.geo).toHaveProperty('lat');
    expect(res.data.company).toHaveProperty('name');
  });

  test('9) GET /comments?postId=1 -> 200, every comment has postId 1', async () => {
    const res = await commentsController.getByPostId(1);

    expect(res.status).toBe(200);
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach((comment) => expect(comment.postId).toBe(1));
  });

  test('10) POST /comments -> 201, creates a comment', async () => {
    const newComment = {
      postId: 1,
      name: 'Test comment',
      email: 'olha@example.com',
      body: 'This is a test comment',
    };
    const res = await commentsController.create(newComment);

    expect(res.status).toBe(201);
    expect(res.data).toMatchObject(newComment);
    expect(typeof res.data.id).toBe('number');
  });
});