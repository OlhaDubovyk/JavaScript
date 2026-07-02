const axios = require('axios');

class BaseController {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 10000,
      validateStatus: () => true,
    });

    this._attachInterceptors();
  }

  _attachInterceptors() {
    this.client.interceptors.request.use((config) => {
      config.metadata = { startTime: Date.now() };
      console.log(`[REQ] ${config.method.toUpperCase()} ${config.url}`);
      return config;
    });

    this.client.interceptors.response.use((response) => {
      const duration = Date.now() - response.config.metadata.startTime;
      response.durationMs = duration;
      console.log(`[RES] ${response.status} ${response.config.url} (${duration} ms)`);
      return response;
    });
  }
}

module.exports = BaseController;