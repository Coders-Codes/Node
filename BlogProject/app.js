const express = require("express");
const cors = require("cors");

const app = express();

const Blog = require("./Model/blogs");
const Comment = require("./Model/comment");
const sequelize = require("./Util/database");

const Router = require("./Routes/BlogsRoute");

app.use(cors());
app.use(express.json());

app.use("/my-blogs", Router);

console.log("WELCOME TO BLOGS PAGE");

Blog.hasMany(Comment);
Comment.belongsTo(Blog);

sequelize
  .sync()
  .then((res) => {
    console.log("SERVER IS RUNNING ON PORT 4000");
    app.listen(4000);
  })
  .catch((err) => console.log(err));
