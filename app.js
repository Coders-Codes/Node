const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');

const routeadmin = require('./routes/admin');
const routeshop = require ('./routes/shop');

const app =express(); 
app.use(bodyParser.urlencoded({extended:false})) ;
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
/*express.static(...): express.static is a built-in middleware function in Express.js used to serve static files, such as HTML, CSS,
JavaScript files, images, and more, from a specified directory. It is used to make these files accessible to clients (browsers) when requested.

path.join(__dirname, 'public'): This part of the code uses the path.join method from Node.js's path module to create an absolute path
 to the directory where your static files are located. __dirname is a global variable in Node.js that represents the directory name of 
 the current module, and 'public' is a subdirectory where your static files are expected to be stored.*/


app.use('/admin', routeadmin);
app.use('/', routeshop);
 
// adding 404 error page using 404 status method
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(3000);


/*ls: to check all the files available in the current directory.
cd: change directory ;
cd .. : to chnage the directory from one step backward
pwd : to know the name of the current directory
whoami : to know the name of the user*/
