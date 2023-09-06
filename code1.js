
const express = require('express') // importing express
const app =express(); // creating express application b running express as a function
//app here is a valid request handler so you so you can pass app to create server

app.use((req, res, next) => {
    console.log('In the Middleware');
    next(); // allows the request to continue to the next middleware
});

app.use((req, res, next) => {
    console.log('In another Middleware');
    res.send('<h1>Hello from Express!</h1>')
})


app.listen(7500);

