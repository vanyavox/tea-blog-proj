require('@babel/register');
require('dotenv').config();
const express = require('express');
const configApp = require('./config/serverConfig');

const app = express();
const port = process.env.PORT ?? 4000;

configApp(app);

const mainRoute = require('./Routes/mainRoute');
const loginRoute = require('./Routes/loginRoute');
const regRoute = require('./Routes/registrationRoute');

app.use('/', mainRoute);
app.use('/login', loginRoute);
app.use('/reg', regRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
