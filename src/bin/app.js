const express = require('express'),
      cors = require('cors'),
      morgan = require('morgan');

const app = express(),
      api = require('./api/routes');

app.use(
   cors(),
   morgan('dev'));

app.get('/', (req, res) => {
   res.status(200)
      .json({
         author: 'Miguel Vega',
         message:'For API tests go to ➡ /api/v1',
         success: true,
      })
})
   
app.use('/api/v1', api);

module.exports = app;