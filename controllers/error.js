const path = require ('path');

exports.get404 = (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "404.html"));
};