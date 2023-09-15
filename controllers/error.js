exports.get404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
};

// const path = require ('path');

// exports.get404 = (req, res, next) => {
//     res.sendFile(path.join(__dirname, "../", "views", "404.html"));
// };
