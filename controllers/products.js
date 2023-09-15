const Product = require("../models/Mproduct");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

// const path = require("path");
// const Product = require("../models/Mproduct");
// const rootDir = require("../util/path");

// const products = [];

// //putting product related logic in this controller which only works with product logic
// //exporting fucntion from admin.js to product controller file to create connection . Product Cotroller bundles all the exported function
// exports.getAddProduct = (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "add-product.html"));
// };

// exports.postAddProduct = (req, res, next) => {
//   const productNew = new Product(req.body.title); // creating a new product based on class
//   productNew.save(); // saving the new product using the save method define in models
//   console.log("Title:", req.body.title); //this products represent our data
//   res.redirect("/");
// };

// exports.getProducts = (req, res, next) => {
//   const products = Product.fetchAll((products) => {
//     //calling fetchAll it takes the function and execute it when it is done and render res[ponse when it is done
//     res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
//   });
// };
