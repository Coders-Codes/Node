const express = require("express");
const Route = express.Router();
const UserController = require("../controllers/user");

Route.get("/", UserController.getUser);

Route.post("/", UserController.postUser);

Route.get("/getDetails", UserController.getUserDetails);

Route.post("/delete-user", UserController.deleteUserDetails);
// Route.delete("/delete-user/:id", UserController.deleteUserDetails); -- param Route

module.exports = Route;
