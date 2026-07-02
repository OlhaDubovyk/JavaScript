const BaseController = require('./BaseController');

class PostsController extends BaseController {
  getAll() {
    return this.client.get('/posts');
  }

  getById(id) {
    return this.client.get(`/posts/${id}`);
  }

  create(data) {
    return this.client.post('/posts', data);
  }

  update(id, data) {
    return this.client.put(`/posts/${id}`, data);
  }

  patch(id, data) {
    return this.client.patch(`/posts/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`/posts/${id}`);
  }

  getComments(postId) {
    return this.client.get(`/posts/${postId}/comments`);
  }
}

module.exports = new PostsController();