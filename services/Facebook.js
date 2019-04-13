const axios = require('axios');

class Facebook {
  async getAccessToken() {
    const username = 'thanh.tra.14473';
    const password = 'Thanhtra9495';
    const token = '6628568379|c1e620fa708a1d5696fb991c1bde5662';
    const result = axios.get(`https://b-graph.facebook.com/auth/login?email=${username}&password=${password}&access_token=${token}&method=post`)
      .then(response => response.data)
      .catch((error) => {
        throw error;
      });
    return result;
  }
}

module.exports = Facebook;
