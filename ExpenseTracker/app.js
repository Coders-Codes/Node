const express = require("express");
const app = express();

const expenseRoute = require("./routes/route");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", expenseRoute);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(1234);
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(1234, () => {
//   console.log("connected");
// });
