function saveUserDetails(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const number = event.target.number.value;
  const email = event.target.email.value;

  const object = {
    name,
    number,
    email,
  };
  console.log(object);
  displayuser(object);

  axios
    .post("http://localhost:3050/", object)
    .then((response) => {
      console.log(response);
      displayuser(response.data.newuser);
    })
    .catch((err) => {
      console.log("Some Error Occurred", err);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3050/getDetails")
    .then((response) => {
      console.log(response);

      for (let i = 0; i < response.data.users.length; i++) {
        displayuser(response.data.users[i]);
        // console.log(response.data.users[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

function displayuser(object) {
  const parentEle = document.getElementById("listofUsers");
  const childEle = document.createElement("li");
  // console.log(object.name, object.number, object.email);
  childEle.innerHTML =
    object.name + " - " + object.number + " - " + object.email;

  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";

  let id = object.id;
  // console.log(id);
  deleteButton.onclick = async () => {
    try {
      let res = await axios.post("http://localhost:3050/delete-user", { id });
      console.log(res.status, res.statusText);
    } catch (err) {
      console.log(err, "ERROR OCCURED WHILE DELETING AN ITEM");
    }
    parentEle.removeChild(childEle);
  };

  //While using query params
  // deleteButton.onclick = async () => {
  //   try {
  //     let res = await axios.delete(`http://localhost:3050/delete-user/${id}`);
  //     if (res.status === 200) {
  //       console.log("User deleted successfully.");
  //       parentEle.removeChild(childEle);
  //     } else {
  //       console.log("Error deleting user.");
  //     }
  //   } catch (err) {
  //     console.log(err, "ERROR OCCURRED WHILE DELETING AN ITEM");
  //   }
  // };

  childEle.appendChild(deleteButton);
  parentEle.appendChild(childEle);
}
