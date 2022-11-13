require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();
const PORT = 3000;

serverConfig(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
