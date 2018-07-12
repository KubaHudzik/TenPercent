const connector = require('./src/db/connector');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.info(`Server is running on port: ${PORT}.`);
});