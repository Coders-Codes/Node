const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error"); //404 Error controller importing module
const sequelize = require("./util/database"); //importing database (db)which will be bascially the pool  whuch allows us to use connection in it

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// db.execute("SELECT * FROM products") //running db .then and catch are the ffunctions we can chain onto the result of the execute  on whatever db.execute function gives us back
//   .then((result) => {
//     console.log(result[0], result[1]);
//   })
//   .catch((err) => {
//     /*to catch an error if the db connection fails */
//     console.log(err);
//   });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(3000);
