function saveToDatabase(event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const content = event.target.content.value;

  const obj = {
    title,
    author,
    content,
  };
  console.log(obj);
  displayBlog(obj);

  //TO CREATE NEW Blog
  axios
    .post("/create", obj)
    .then((response) => {
      // console.log(response);
      displayBlog(response.data);
    })
    .catch((err) => {
      console.log("Some Error Ocuured", err);
    });
  location.reload();
}

//TO GET ALL THE DETAILS OF Blogs SO FAR
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("/blogDetails")
    .then((response) => {
      console.log(response);

      for (let i = 0; i < response.data.blogs.length; i++) {
        displayBlog(response.data.blogs[i]);
        // console.log(response.data.users[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

//FUNCTION TO DISPLAY Blogs ON SCREEN FUNCTIONALITY
function displayBlog(obj) {
  const parentEle = document.getElementById("listofblogs");
  const childEle1 = document.createElement("li");
  const childEle2 = document.createElement("li");
  const childEle3 = document.createElement("li");

  childEle1.textContent = "Title -  " + obj.title;
  childEle2.textContent = "Author -  " + obj.author;
  childEle3.textContent = "Content -  " + obj.content;

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Comment";
  commentInput.name = "comment";

  const commentButton = document.createElement("input");
  commentButton.type = "button";
  commentButton.value = "Comment";

  commentButton.addEventListener("click", displayComment);

  // const deleteButton = document.createElement("input");
  // deleteButton.type = "button";
  // deleteButton.value = "Delete";

  // TO DELETE Blogs FUNCTIONALITY
  // let id = obj.id;
  // console.log(id);
  /*deleteButton.onclick = async () => {
      try {
        let res = await axios.delete(
          `http://localhost:1000/delete-blog/${id}`
        );
        // let res = await axios.post("http://localhost:1000/delete-blog", { id,});
        console.log(res.status, res.statusText);
      } catch (err) {
        console.log(err, "ERROR OCCURED WHILE DELETING AN ITEM");
      }
      parentEle.removeChild(childEle);
    };*/
  childEle3.appendChild(commentInput);
  childEle3.appendChild(commentButton);

  // childEle.appendChild(deleteButton);
  parentEle.appendChild(childEle1);
  parentEle.appendChild(childEle2);
  parentEle.appendChild(childEle3);
}

function displayComment(event) {
  event.preventDefault();
  const comment = event.target.comment.value;
  const obj1 = {
    comment,
  };
  console.log(obj1);

  axios
    .post("/comment", obj1)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
}
