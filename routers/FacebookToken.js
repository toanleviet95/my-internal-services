const express = require('@feathersjs/express');
const FacebookToken = require('../services/FacebookToken');

const router = express.Router();

router.post('/create-random-token', async (req, res) => {
  const { app, body } = req;
  const facebookToken = new FacebookToken(app);
  try {
    const response = await facebookToken.createRandomAccessToken(body.username, body.password);
    res.send({ data: response });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
