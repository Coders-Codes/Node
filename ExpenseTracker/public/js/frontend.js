function saveToDatabase(event) {
  event.preventDefault();
  const amount = event.target.amount.value;
  const description = event.target.description.value;
  const category = event.target.category.value;

  const obj = {
    amount,
    description,
    category,
  };
  console.log(obj);
  displayExpense(obj);

  //TO CREATE NEW EXPENSE
  axios
    .post("http://localhost:1234/", obj)
    .then((response) => {
      console.log(response);
      displayExpense(response.data);
    })
    .catch((err) => {
      console.log("Some Error Ocuured", err);
    });
  location.reload();
}

//TO GET ALL THE DETAILS OF EXPENSES SO FAR
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:1234/getDetails")
    .then((response) => {
      console.log(response);

      for (let i = 0; i < response.data.expenses.length; i++) {
        displayExpense(response.data.expenses[i]);
        // console.log(response.data.users[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

//FUNCTION TO DISPLAY EXPENSES ON SCREEN FUNCTIONALITY
function displayExpense(obj) {
  const parentEle = document.getElementById("listofitems");
  const childEle = document.createElement("li");
  childEle.innerHTML =
    obj.amount + " - " + obj.description + " - " + obj.category;

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";

  // TO DELETE EXPENSES FUNCTIONALITY
  let id = obj.id;
  // console.log(id);
  deleteButton.onclick = async () => {
    try {
      let res = await axios.delete(
        `http://localhost:1234/delete-expense/${id}`
      );
      // let res = await axios.post("http://localhost:1234/delete-expense", { id,});
      console.log(res.status, res.statusText);
    } catch (err) {
      console.log(err, "ERROR OCCURED WHILE DELETING AN ITEM");
    }
    parentEle.removeChild(childEle);
  };

  const editButton = document.createElement("input");
  editButton.type = "button";
  editButton.value = "Edit";

  // TO EDIT EXPENSES FUNCTIONALITY
  editButton.onclick = async () => {
    const amount1 = prompt("Enter Your Amount");
    const description1 = prompt("Enter Your description");
    const category1 = prompt("Enter Your category");

    const updatedExpense = {
      amount: amount1,
      description: description1,
      category: category1,
    };

    try {
      const response = await axios.put(
        `http://localhost:1234/edit-expense/${id}`,
        updatedExpense
      );

      // Update the displayed expense with the updated data
      displayExpense(response.data);
    } catch (err) {
      console.log(err, "ERROR OCCURRED WHILE UPDATING AN ITEM");
    }
    location.reload();
  };

  childEle.appendChild(deleteButton);
  childEle.appendChild(editButton);
  parentEle.appendChild(childEle);
}
