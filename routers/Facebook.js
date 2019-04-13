const express = require('@feathersjs/express');
const Facebook = require('../services/Facebook');

const router = express.Router();
const facebook = new Facebook();

router.get('/get-random-token', async (req, res) => {
  const response = await facebook.getAccessToken();
  res.send(response);
});

module.exports = router;
