const express = require ('express');
const path = require ('path');

// const rootDir = require('../util/path')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html')) // sending File back to the user
});

module.exports = router;