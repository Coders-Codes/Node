const path = require ('path');

//putting product related logic in this controller which only works with product logic
//exporting fucntion from admin.js to product controller file . Product Cotroller bundles all the exported function
exports.getAddProduct = (req, res, next) => {
res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
};

exports.postAddProduct = (req, res, next) => {
   console.log('Title:', req.body.title);
   res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html')) 
}