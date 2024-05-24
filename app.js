const express = require('express');
const app = express();
const port = 3000;
const { index } = require('./controllers/index.js');
const { path } = require('./utils.js');
const posts = require('./controllers/posts.js');

app.use(express.static('public'));
app.use(express.json());

app.get('/', index);
app.get('/posts', posts.get);
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.post('/posts', posts.post)

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
})