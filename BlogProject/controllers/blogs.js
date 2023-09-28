const path = require("path");
const Blog = require("../models/blogss");
// const Comment = require("../models/comment");

exports.getCreateBlog = (req, res, next) => {
  const Filename = path.join(__dirname, "../", "views", "index.html");
  res.sendFile(Filename);
};

exports.postBlog = async (req, res, next) => {
  try {
    const { title, author, content } = req.body;
    const newBlog = { title, author, content };
    console.log("This is console at line 11", newBlog);

    await Blog.create({
      title: title,
      author: author,
      content: content,
    });

    return res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.getBlogDetails = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    console.log(blogs);
    return res.status(200).json({ blogs });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

// exports.postComment = async (req, res, next) => {
//   try {
//     const { comment } = req.body;
//     const newComment = { comment };
//     console.log("console at 45", newComment);

//     await Comment.create({
//       comment: comment,
//     });

//     return res.status(201).json(newComment);
//   } catch (err) {
//     res.status(500).json({
//       error: err,
//     });
//   }
// };

// exports.deleteComment = (req, res) => {
//   // exports.postdeleteExpense = (req, res) => {
//   const id = req.params.id;
//   // const id = req.body.id;
//   Expense.findByPk(id)
//     .then((expense) => {
//       return expense.destroy();
//     })
//     .then((result) => {
//       console.log("DESTROYED EXPENSE");
//       return res.status(204).send();
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
