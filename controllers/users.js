const path = require ('path');

exports.getcontactController = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html')); 
};


exports.postsuccessController = (req, res, next) => {
    console.log('Name:', req.body.name); 
    console.log('Email:', req.body.email);
   res.redirect('/success');
};