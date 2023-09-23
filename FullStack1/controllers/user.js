const path = require("path");
const model = require("../model/userr");

exports.getUser = (req, res, next) => {
  const string = path.join(__dirname, "../", "views", "index1.html");
  res.sendFile(string);
};

exports.postUser = async (req, res, next) => {
  try {
    const { name, number, email } = req.body;
    const newUser = { name, number, email };
    console.log("This is console at line 11", newUser);

    await model.create({
      name: name,
      number: number,
      email: email,
    });

    return res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.getUserDetails = async (req, res, next) => {
  try {
    const users = await model.findAll();
    // console.log(users);
    return res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.deleteUserDetails = (req, res, next) => {
  // const id = req.params.id;
  const id = req.body.id;
  model
    .findByPk(id)
    .then((Row) => {
      return Row.destroy();
    })
    .then(() => {
      console.log("Succesfully deleted -------------");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
