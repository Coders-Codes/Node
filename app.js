const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const routeadmin = require("./routes/admin");
const routeshop = require("./routes/shop");
const routecontact = require("./routes/contact");
const routesuccess = require("./routes/success")

const errorController = require ('./controllers/error') //404 Error controller importing module

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", routeadmin);
app.use("/", routeshop);
app.use("/contactus", routecontact);
app.use("/success", routesuccess);

//404 page
app.use(errorController.get404); // Using Controller

app.listen(3000);


