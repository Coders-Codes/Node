const path = require ('path'); // exporting the path module
const express =  require ('express');

// const rootDir = require('../util/path')

const router = express.Router();// creating router and executing it as a function

//using router to register routes
router.get('/add-product', (req, res, next) => {
res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); // using the path module to define the html code for the current js file
//dirname - global variable that holds the absolute path of our operating system, views-folder name, ../ -  go upward to one level or backward, add-product.html - filename which contains the main code
//res.sendfile - send back a file to the user and sendFile is a HeaderFile
});

//Route that handles the request to product 
router.post('/add-product',(req, res, next) => {
    console.log('Title:', req.body.title);// getting the body of incoming requests, logging incoming data coming from the response or extracting what user has sent
   res.redirect('/'); // using for redirecting it as function by express
    // next();
});

module.exports = router;