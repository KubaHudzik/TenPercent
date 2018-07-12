const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('combined'));
app.use(routes);

app.listen(PORT, () => {
    console.info(`Server is running on port: ${PORT}.`);
});