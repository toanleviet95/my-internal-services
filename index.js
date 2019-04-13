const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const Facebook = require('./routers/Facebook');

const PORT = process.env.PORT || 3000;

// This creates an app that is both, an Express and Feathers app
const app = express(feathers());

// Turn on JSON body parsing for REST services
app.use(express.json());
// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport using Express
app.configure(express.rest());

// Set up an error handler that gives us nicer errors
app.use(express.errorHandler());

app.use('/facebook', Facebook);

// app.get('/facebook/get-random-token', () => {
//   app.service('facebook').getAccessToken();
// });

// Start the server on port
app.listen(PORT);
