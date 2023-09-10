const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const routeadmin = require("./routes/admin");
const routeshop = require("./routes/shop");
const routecontact = require("./routes/contact");
const routesuccess = require("./routes/success")

const errorController = require ('./controllers/error')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", routeadmin);
app.use("/", routeshop);
app.use("/contactus", routecontact);
app.use("/success", routesuccess);

//404 page
app.use(errorController.get404); // Using Controller

app.listen(3000);


