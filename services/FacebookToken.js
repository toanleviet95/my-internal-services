const axios = require('axios');

class FacebookToken {
  constructor(app) {
    this.app = app;
    this.token = '';
  }

  async find(params) {
  
  }

  async get(id, params) {

  }

  async create(data) {
    return this.app.service('facebookTokens').create({
      uid: data.uid || 0,
      secret: data.secret || '',
      session_key: data.session_key || '',
      identifier: data.identifier || '',
      access_token: data.access_token || '',
    }).then(createdToken => createdToken)
      .catch(error => error);
  }

  async patch(id, data, params) {
 
  }

  async remove(id, params) {
   
  }

  async createRandomAccessToken(username, password) {
    const token = '6628568379|c1e620fa708a1d5696fb991c1bde5662';
    return axios.get(`https://b-graph.facebook.com/auth/login?email=${username}&password=${password}&access_token=${token}&method=post`)
      .then((response) => {
        if (response && response.data) {
          this.token = response.data;
          this.create(response.data);
        }
        return response.data;
      })
      .catch(error => error);
  }
}

module.exports = FacebookToken;
