const express = require('express')  ;
const routeadmin = require('./admin');
const routeshop = require ('./shop');

const bodyParser = require('body-parser');

const app =express(); 
app.use(bodyParser.urlencoded({extended:false})) 

app.use('/admin', routeadmin);
app.use('/shop', routeshop);

// adding 404 error page using 404 status method
app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})


app.listen(4000);


