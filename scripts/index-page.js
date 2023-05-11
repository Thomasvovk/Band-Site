const key = "ac75bb68-cbf2-4fe0-88ca-f67b40e88c1b";
const url = "https://project-1-api.herokuapp.com/comments/";

// Displaying all the comments from API
function displayEveryting() {
  axios.get(`${url}?api_key=${key}`).then((response) => {
    response.data.forEach((comment) => {
      displayComment(comment);
    });
  });
}

displayEveryting();

// Structure for Comment Section

const postedComments = document.querySelector(".comments");
function displayComment(comment) {
  postedComments.classList.add("posted-comments");

  const userComment = document.createElement("div");
  userComment.classList.add("posted-comments__user-comment");
  postedComments.appendChild(userComment);

  const placeholder = document.createElement("div");
  placeholder.classList.add("posted-comments__placeholder-img");
  userComment.appendChild(placeholder);

  const commentsCard = document.createElement("div");
  commentsCard.classList.add("posted-comments__card");
  userComment.appendChild(commentsCard);

  const commentsDate = document.createElement("div");
  commentsDate.classList.add("posted-comments__name-date");
  commentsCard.appendChild(commentsDate);

  const paragraph = document.createElement("p");
  paragraph.classList.add("posted-comments__username");
  commentsDate.appendChild(paragraph);
  paragraph.innerText = comment.name;

  const paragraph2 = document.createElement("p");
  paragraph2.classList.add("posted-comments__date");
  commentsDate.appendChild(paragraph2);
  paragraph2.innerText = new Date(comment.timestamp).toDateString();

  const paragraph3 = document.createElement("p");
  paragraph3.classList.add("posted-comments__text");
  commentsCard.appendChild(paragraph3);
  paragraph3.innerText = comment.comment;
}

// Creating an event handlet when someone submit a comment,
// it gathar data from the form and adding it to API.

const form = document.querySelector(".comments-section__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("name");
  const comment = document.getElementById("comment");

  axios
    .post(`${url}?api_key=${key}`, {
      name: username.value,
      comment: comment.value,
    })
    .then(() => {
      displayEveryting();
    });

  postedComments.innerHTML = "";

  username.value = "";
  comment.value = "";
});
