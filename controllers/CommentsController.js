const BaseController = require('./BaseController');

class CommentsController extends BaseController {
  getByPostId(postId) {
    return this.client.get('/comments', { params: { postId } });
  }

  create(data) {
    return this.client.post('/comments', data);
  }
}

module.exports = new CommentsController();