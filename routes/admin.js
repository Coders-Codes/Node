const path = require ('path'); 
const express =  require ('express');

const productsController = require ('../controllers/products') // importing controller 

const router = express.Router();// creating router and executing it as a function

//using router to register routes /admin/add-product => GET and connecting it with the controller
router.get('/add-product',productsController.getAddProduct); 
//passing an refrence to this function

//Route that handles the request to product and connecting it with the controller 
router.post('/add-product',productsController.postAddProduct);
 

module.exports = router;