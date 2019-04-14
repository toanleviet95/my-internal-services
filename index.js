const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const cors = require('cors');
const mongoose = require('mongoose');
const service = require('feathers-mongoose');
const facebookTokenRouter = require('./routers/FacebookToken');
const FacebookToken = require('./models/FacebookToken');

const PORT = process.env.PORT || 3000;
const MONGO_CONNECTION = process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/local';
const whitelist = ['http://example1.com', 'http://example2.com'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

mongoose.Promise = global.Promise;

// Connect to your MongoDB instance(s)
mongoose.connect(MONGO_CONNECTION);

// This creates an app that is both, an Express and Feathers app
const app = express(feathers());

// Turn on JSON body parsing for REST services
app.use(express.json());
// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport using Express
app.configure(express.rest());
// Connect to the db, create and register a Feathers service.
app.use('/facebookTokens', service({
  Model: FacebookToken,
  lean: true, // set to false if you want Mongoose documents returned
}));
// Set up an error handler that gives us nicer errors
app.use(express.errorHandler());

// app.get('/', cors(corsOptions), (req, res) => {
//   res.json({ msg: 'This is CORS-enabled for a whitelisted domain.' });
// });

app.use('/facebook-token', facebookTokenRouter);

// Start the server on port
app.listen(PORT);
