const path = require("path");
const express = require("express");

const productsController = require("../controllers/products"); // importing controller

const router = express.Router(); // creating router and executing it as a function

router.get("/add-product", productsController.getAddProduct); // connecting it with controller
//passing an refrence to this function it means that we are telling express, the express router that it should take this function
//and store it and whenever a request reaches this route, it should go ahead and execute it.

// Route that handles the request to product and connecting it with the controller
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
