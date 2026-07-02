const BaseController = require('./BaseController');

class UsersController extends BaseController {
  getAll() {
    return this.client.get('/users');
  }

  getById(id) {
    return this.client.get(`/users/${id}`);
  }
}

module.exports = new UsersController();