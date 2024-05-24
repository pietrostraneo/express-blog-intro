module.exports = {
    index: (req, res) => {
        res.format({
            html: () => {
                res.send(`<h1>Benvenuti sul mio blog!</h1>`);
            }
        })
    }
}