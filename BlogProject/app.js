const express = require("express");
const app = express();
const cors = require("cors");

const blogRoute = require("./routes/blog");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

app.use(express.static("public"));

// const Blog = require("./models/blogss");
// const Comment = require("./models/comment");

// app.use((req, res, next) => {
//   User.findByPk(1)
//     .then((comment) => {
//       req.comment = comment;
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", blogRoute);

// Blog.hasMany(Comment);
// Comment.belongsTo(Blog);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(1000);
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(1000, () => {
//   console.log("connected");
// });
