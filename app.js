const express = require('express');
const app = express();
const port = 3000;
const { index } = require('./controllers/index.js');
const posts = require('./controllers/posts.js');

app.use(express.static('public'));
app.use(express.json());

app.get('/', index);
app.get('/posts', posts.get);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
})