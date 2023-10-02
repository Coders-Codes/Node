// Function to post a new blog
function saveBlogs(e) {
  e.preventDefault();
  const title = e.target.title.value;
  const author = e.target.author.value;
  const content = e.target.content.value;

  const obj = { title, author, content };

  axios
    .post("http://localhost:4000/my-blogs/addblog", obj)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  e.target.title.value = "";
  e.target.author.value = "";
  e.target.content.value = "";
}

// Function to display a blog
function displayBlogs(obj) {
  const { id, title, author, content } = obj;
  const Parent = document.querySelector("#blogsContainer");

  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const p = document.createElement("p");

  p.className = "pCommnet";

  const comment = document.createElement("input");
  comment.type = "text";
  comment.name = "comment";
  comment.id = "comment";
  comment.className = "ms-5";
  comment.placeholder = "Comment here...";

  const button = document.createElement("input");
  button.type = "button";
  button.className = "btn btn-success ms-2";
  button.value = "comment";

  p.setAttribute("data-blog-id", id); // Add this line

  button.addEventListener("click", async (e) => {
    const commentText = comment.value;
    if (commentText.trim() !== "") {
      await postComment(id, commentText);
      await fetchAndDisplayComments(id);
    }
    comment.value = "";
    console.log(commentText);
  });

  li1.textContent = title;
  li2.textContent = author;
  p.textContent = content;

  p.appendChild(comment);
  p.appendChild(button);
  Parent.appendChild(li1);
  Parent.appendChild(li2);
  Parent.appendChild(p);
}

// Function to fetch and display comments for a blog
function fetchAndDisplayComments(blogId) {
  axios
    .get(`http://localhost:4000/my-blogs/addcomment/${blogId}`)
    .then((comments) => {
      displayComments(blogId, comments.data);
      console.log(comments.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function to display comments for a blog
function displayComments(blogId, comments) {
  const blogContainer = document.querySelector(`p[data-blog-id="${blogId}"]`);

  if (!blogContainer) {
    console.error(`Blog container with ID ${blogId} not found.`);
    return;
  }

  // Clear existing comments
  const existingComments = blogContainer.querySelector(".comments");
  if (existingComments) {
    existingComments.remove();
  }

  const commentList = document.createElement("ul");
  commentList.className = "comments";
  for (const comment of comments) {
    const commentItem = document.createElement("li");
    commentItem.style.color = "white";
    commentItem.textContent = comment.comment;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger ms-2";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteComment(comment.id);
      // Optionally, you can refresh the comments after deletion
      fetchAndDisplayComments(blogId);
    });

    commentItem.appendChild(deleteButton);

    commentList.appendChild(commentItem);
    console.log(commentItem);
    console.log(commentList);
  }

  blogContainer.appendChild(commentList);
}

// Event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:4000/my-blogs/addblog")
    .then((result) => {
      for (var i = 0; i < result.data.length; i++) {
        console.log(result.data[i]);
        displayBlogs(result.data[i]);
        fetchAndDisplayComments(result.data[i].id);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// Function to post a new comment
function postComment(blogId, commentText) {
  const obj = { blogId, commentText };
  axios
    .post("http://localhost:4000/my-blogs/addcomment", obj)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function deleteComment(commentId) {
  try {
    const response = await axios.delete(
      `http://localhost:4000/my-blogs/addcomment/${commentId}`
    );
    console.log("SUCCESSFULLY DELETED");
  } catch (error) {
    console.error(error);
  }
}
