

const express = require('express')  
const bodyParser = require('body-parser');

const app =express(); 

app.use(bodyParser.urlencoded({extended:false})) 
// through this we will get the js object with key-valur pair which the user has requested

app.use('/add-product', (req, res, next) => {
    res.send('<form action = "/product" method = "POST"><input type="text" name = "title"></br></br><input type = "number" name="quantity"></br></br><button type = "submit" >Add Product</button></form>');
}) // the form needs an acion so the url to which the request should be send is product

//Route that handles the request to product 
app.post('/product',(req, res, next) => {
    console.log('Title:', req.body.title);// getting the body of incoming requests, logging incoming data coming from the response or extracting what user has sent
    console.log('Size:', req.body.quantity);
    res.redirect('/'); // using for redirecting it as function by express
    // next();
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>')
});

app.listen(3000);


