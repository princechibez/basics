const express = require('express');

const app = express();
const routes = require('./routes/generalRoutes');

app.use(routes);

app.listen(8080);