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

const Product = require("./models/product");
const User = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user1) => {
      req.user1 = user1;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    // console.log(result);
    return User.findByPk(1);
  })
  .then((user1) => {
    if (!user1) {
      return User.create({ name: "Max", email: "test@test.com" });
    }
    return user1;
  })
  .then((user1) => {
    // console.log(user1);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(3000);
