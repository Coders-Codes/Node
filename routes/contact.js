const path = require ('path'); 
const express =  require ('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html')); 
});

router.post('/', (req, res, next) => {
    console.log('Name:', req.body.name); 
    console.log('Email:', req.body.email);
   res.redirect('/success');
});

 module.exports = router;