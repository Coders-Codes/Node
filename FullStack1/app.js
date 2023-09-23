const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const sequelize = require("./util/database");

app.use("/", userRoute);
// sequelize
//   .sync()
//   .then((result) => {
//     console.log(result);
//     app.listen(3050, () => {
//       console.log("connected");
//     });
//   })
//   .catch((err) => console.log(err));

app.listen(3050, () => {
  console.log("connected");
});
