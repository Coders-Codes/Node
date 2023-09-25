const path = require("path");
const Expense = require("../models/expense");

exports.getExpense = (req, res, next) => {
  const Filename = path.join(__dirname, "../", "views", "index.html");
  res.sendFile(Filename);
};

//POST EXPENSE -- CREATE
exports.postExpense = async (req, res, next) => {
  try {
    const { amount, description, category } = req.body;
    const newExpense = { amount, description, category };
    console.log("This is console at line 11", newExpense);

    await Expense.create({
      amount: amount,
      description: description,
      category: category,
    });

    return res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

//GET EXPENSE -- TO GET DATA OF ALL EXPENSES
exports.getDetails = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    // console.log(expenses);
    return res.status(200).json({ expenses });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

//DELETE EXPENSE
exports.deleteExpense = (req, res) => {
  // exports.postdeleteExpense = (req, res) => {
  const id = req.params.id;
  // const id = req.body.id;
  Expense.findByPk(id)
    .then((expense) => {
      return expense.destroy();
    })
    .then((result) => {
      console.log("DESTROYED EXPENSE");
      return res.status(204).send();
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

//EDIT OR UPDATE EXPENSE
exports.updateExpense = async (req, res) => {
  const id = req.params.id;
  const { amount, description, category } = req.body;

  try {
    await Expense.update(req.body, { where: { id } });

    return res.status(200).json(expense);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to update expense" });
  }
};
