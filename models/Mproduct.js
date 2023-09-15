const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};

// module.exports = class Product {
//   // making Model
//   constructor(title) {
//     /*receiving an title for the product which will create from inside controller*/
//     this.title = title; // creating property
//   }

//   save() {
//     // store the products to array of products and fetch it
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       "data", // new folder to store data
//       "products.json"
//     ); // store data in json format
//     fs.readFile(p, (err, fileContent) => {
//       // reads the entire content of file
//       let products = [];
//       if (!err) {
//         products = JSON.parse(fileContent); // fileContent : the data in the file
//       }
//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), (err) => {
//         console.log(err);
//       }); //push the new product, here this refers to the class
//     });
//   }

//   //cb argument holds a function callback allows to pass a function in to fetchAll which fetchAll will execute once it is done
//   static fetchAll(cb) {
//     // act as an utility function it should fetch all products and statifs.readc so we can directly call the method on class itself and not on any object
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       "data", // new folder to store data
//       "products.json"
//     ); // store data in json format

//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         cb([]); //execute this argument as a fucntion to which we pass an empty array
//       }
//       cb(JSON.parse(fileContent)); //
//     });
//   }
// };

//   static fetchAll() {
//     // act as an utility function it should fetch all products and statifs.readc so we can directly call the method on class itself and not on any object
//     const p = path.join(
//       path.dirname(process.mainModule.filename),
//       "data", // new folder to store data
//       "products.json"
//     ); // store data in json format

//     fs.readFile(p, (err, fileContent) => {
//       if (err) {
//         return [];
//       }
//       return JSON.parse(fileContent);
//     });
//   }
// };

// how a product look like, which fields it has, does it have an Image, a title that is our core data.
