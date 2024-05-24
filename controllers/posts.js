const { readJSON, writeJSON } = require("../utils.js");

module.exports = {
    get: (req, res) => {
        const posts = readJSON('post');
        res.format({
            html: () => {
                let html = `<main>`;
                posts.forEach(({ title, content, image, tags }) => {
                    html += `
                        <div>
                        <h2>${title}</h2>
                        <img width="150" src="/${image}"/>
                        <p>${content}</p>
                        <b>Tags:</b>
                        <ul>
                    `
                    tags.forEach(t => {
                        html += `<li>${t}</li>`
                    })
                    html += `
                    </ul>
                    </div>
                    `
                });
                html += `</main>`;
                res.send(html);
            },
            json: () => {
                res.json(posts);
            }
        })
    }
}