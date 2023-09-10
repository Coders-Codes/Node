const express = require ('express');
const path = require ('path');

const productsController = require ('../controllers/products') // importing controller 
const router = express.Router();

router.get('/',productsController.getProducts);
    
module.exports = router;