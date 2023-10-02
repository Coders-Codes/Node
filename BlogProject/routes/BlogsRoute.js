const express = require("express");

const router = express.Router();
const Controller = require("../Controller/BlogsController");

// router.get("/", Controller.getData);
router.get("/addblog", Controller.getBlog);
router.post("/addblog", Controller.PostBlog);
router.post("/addcomment", Controller.postComment);
router.get("/addcomment/:blogId", Controller.getCommnet);
router.delete("/addcomment/:id", Controller.deleteComment);

module.exports = router;
