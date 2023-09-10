const path = require ('path'); 
const express =  require ('express');

const router = express.Router();

const usersController = require ('../controllers/users') // importing controller 


router.get('/', usersController.getcontactController)
router.post('/', usersController.postsuccessController)

module.exports = router;