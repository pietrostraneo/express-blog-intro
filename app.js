const express = require('express');
const app = express();
const port = 3000;
const { index } = require('./controllers/index.js');

app.get('/', index);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
})