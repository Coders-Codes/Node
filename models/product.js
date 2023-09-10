// const { log } = require("console");
// const fs = require("fs");
// const path = require("path");

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   "data",
//   "products.json"
// );

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, data) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(data));
//     }
//   });
// };
// module.exports = class Product {
//   constructor(title) {
//     this.title = title;
//   }

//   save() {
//     getProductsFromFile((products) => {
//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), (err) => {
//         console.log(err);
//       });
//     });
//   }

//   static fetchAll(cb) {
//     getProductsFromFile(cb);
//   }
// };
const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title, products) {
    this.title = title;
    this.products = products;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        this.products = JSON.parse(fileContent);
      }
      this.products.push(this.title);
      fs.writeFileSync(p, JSON.stringify(this.products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
    return this.products;
  }
};
