require('dotenv').config();

const app = require('./bin/app');

const { appConfig } = require('./bin/config');

function init(host, port) {
   app.listen(port, () => {
      console.clear();
      console.info(`API Running on: ${host}:${port}/api/v1/`);
      console.log('');
   })
}

init(appConfig.host, appConfig.port)