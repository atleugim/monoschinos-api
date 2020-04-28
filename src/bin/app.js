const express = require('express'),
      cors = require('cors'),
      morgan = require('morgan');

const app = express(),
      api = require('./api/routes');

app.use(
   cors(),
   morgan('dev'));
   
app.use('/api/v1', api);

module.exports = app;