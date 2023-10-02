const Blogs = require("../Model/blogs");
const Comment = require("../Model/comment");
// const path = require("path");

// exports.getData = (req, res) => {
//   const File = paht.join(__dirname, "../", "views", "index.html");
//   console.log(File);
// };

exports.PostBlog = (req, res, next) => {
  const { title, author, content } = req.body;
  return Blogs.create({
    title: title,
    author: author,
    content: content,
  })
    .then((data) => {
      console.log("Successfully added to the database from the page");
      return res.json(data);
    })
    .catch((err) => console.log(err));
};

exports.getBlog = (req, res, next) => {
  Blogs.findAll()
    .then((blog) => {
      res.json(blog);
    })
    .catch((err) => console.log(err));
};

exports.postComment = (req, res, next) => {
  const { blogId, commentText } = req.body;
  return Comment.create({
    blogId: blogId,
    comment: commentText,
  })
    .then((data) => {
      console.log("Comment -----========= added to the database from the page");
      return res.json(data);
    })
    .catch((err) => console.log(err));
};

exports.getCommnet = (req, res, next) => {
  const blogId = req.params.blogId;
  Comment.findAll({ where: { blogId: blogId } })
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteComment = (req, res, next) => {
  const id = req.params.id;
  Comment.findByPk(id)
    .then((comment) => {
      return comment.destroy();
    })
    .then((resu) => {
      res.status(200).json({ success: true, messsage: "Successfully Deleted" });
    })
    .catch((err) => {
      res
        .status(400)
        .json({
          success: false,
          message: "Error occured while deleting an item",
        });
    });
};
// exports.deleteComment = (req, res, next) => {
//   const id = req.params.id;
//   Comment.findByPk(id)
//     .then((comment) => {
//       return comment.destroy();
//     })
//     .then((result) => {
//       console.log(" Comment Deleted");
//       return res.status(204).json({ message: "success" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
