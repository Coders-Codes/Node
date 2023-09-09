const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const routeadmin = require("./routes/admin");
const routeshop = require("./routes/shop");
const routecontact = require("./routes/contact");
const routesuccess = require("./routes/success");

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

// adding 404 error page using 404 status method
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

