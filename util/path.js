const path = require("path");

module.exports = path.dirname(process.mainModule.filename);

/*Dirname : returns the directory name of the path
process : global process variable available in all files
mainModule : a property that refers to thr main module thaat started your application
filename : to find out which file tthis module was in*/
