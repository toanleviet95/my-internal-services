const mongoose = require('mongoose');

const { Schema } = mongoose;
const FacebookTokenSchema = new Schema({
  uid: {
    type: Number,
  },
  secret: {
    type: String,
  },
  session_key: {
    type: String,
  },
  identifier: {
    type: String,
  },
  access_token: {
    type: String,
    required: true,
  },
});
const FacebookToken = mongoose.model('facebook_token', FacebookTokenSchema);

module.exports = FacebookToken;
