const comments = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity.Can't get enough.",
  },
];
const postedComments = document.getElementById("comments");
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
  paragraph2.innerText = comment.timestamp;

  const paragraph3 = document.createElement("p");
  paragraph3.classList.add("posted-comments__text");
  commentsCard.appendChild(paragraph3);
  paragraph3.innerText = comment.text;
}

comments.forEach((comment) => {
  displayComment(comment);
});

const form = document.querySelector(".comments-section__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("name");
  const comment = document.getElementById("comment");

  comments.unshift({
    name: username.value,
    timestamp: "01/09/2021",
    text: comment.value,
  });

  postedComments.innerHTML = "";

  comments.forEach((comment) => {
    displayComment(comment);
  });
  username.value = "";
  comment.value = "";
});

// Trying to figure it out

// // --------

//   // Extract values from input fields
//   const name = document.querySelector("#name").value;
//   const comment = document.querySelector("#comment").value;
//   const timestamp = new Date().toLocaleDateString();

//   // Create new comment object
//   const newComment = { name, timestamp, text: comment };

//   // Add new comment to comments array
//   comments.push(newComment);

//   // Clear form fields
//   document.querySelector("#name").value = "";
//   document.querySelector("#comment").value = "";

//   // Update displayed comments
//   displayComment(comments);
// });

// // Display initial comments
// displayComment(comments);
