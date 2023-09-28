const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/blogs");

router.get("/", BlogController.getCreateBlog);

router.post("/create", BlogController.postBlog);

router.get("/blogDetails", BlogController.getBlogDetails);

// router.post("/comment", BlogController.postComment);

module.exports = router;
