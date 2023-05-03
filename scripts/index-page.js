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

function displayComment(comments) {
  const container = document.getElementById("comments");
  container.classList.add("posted-comments");

  comments.forEach((comment) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("posted-comments__user-comment");
    container.appendChild(newDiv);

    const newDiv2 = document.createElement("div");
    newDiv2.classList.add("posted-comments__placeholder-img");
    newDiv.appendChild(newDiv2);

    const newDiv3 = document.createElement("div");
    newDiv3.classList.add("posted-comments__card");
    newDiv.appendChild(newDiv3);

    const newDiv4 = document.createElement("div");
    newDiv4.classList.add("posted-comments__name-date");
    newDiv3.appendChild(newDiv4);

    const paragraph = document.createElement("p");
    paragraph.classList.add("posted-comments__username");
    newDiv4.appendChild(paragraph);
    paragraph.innerHTML = comment.name;

    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("posted-comments__date");
    newDiv4.appendChild(paragraph2);
    paragraph2.innerHTML = comment.timestamp;

    const paragraph3 = document.createElement("p");
    paragraph3.classList.add("posted-comments__text");
    newDiv3.appendChild(paragraph3);
    paragraph3.innerHTML = comment.text;
  });
}

displayComment(comments);

// const comments = [
//   {
//     name: "Connor Walton",
//     timestamp: "02/17/2021",
//     text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//   },

//   {
//     name: "Emilie Beach",
//     timestamp: "01/09/2021",
//     text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//   },

//   {
//     name: "Miles Acosta",
//     timestamp: "12/20/2020",
//     text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity.Can't get enough.",
//   },
// ];

// function displayComment(comments) {
//   const container0 = document.getElementById("comments");
//   container0.classList.add("posted-comments");

//   const container = document.getElementById("comments");
//   const newDiv = document.createElement("div");
//   newDiv.classList.add("posted-comments__user-comment");
//   container.appendChild(newDiv);

//   const container2 = document.querySelector(".posted-comments__user-comment");
//   const newDiv2 = document.createElement("div");
//   newDiv2.classList.add("posted-comments__placeholder-img");
//   container2.appendChild(newDiv2);

//   const container3 = document.querySelector(".posted-comments__user-comment");
//   const newDiv3 = document.createElement("div");
//   newDiv3.classList.add("posted-comments__card");
//   container3.appendChild(newDiv3);

//   const container4 = document.querySelector(".posted-comments__card");
//   const newDiv4 = document.createElement("div");
//   newDiv4.classList.add("posted-comments__name-date");
//   container4.appendChild(newDiv4);

//   const container5 = document.querySelector(".posted-comments__name-date");
//   const paragraph = document.createElement("p");
//   paragraph.classList.add("posted-comments__username");
//   container5.appendChild(paragraph);

//   const element = document.querySelector(".posted-comments__username");
//   element.innerHTML = comments.name;

//   const container6 = document.querySelector(".posted-comments__name-date");
//   const paragraph2 = document.createElement("p");
//   paragraph2.classList.add("posted-comments__date");
//   container6.appendChild(paragraph2);

//   const element2 = document.querySelector(".posted-comments__date");
//   element2.innerHTML = comments.timestamp;

//   const container7 = document.querySelector(".posted-comments__card");
//   const paragraph3 = document.createElement("p");
//   paragraph3.classList.add("posted-comments__text");
//   container7.appendChild(paragraph3);

//   const element3 = document.querySelector(".posted-comments__text");
//   element3.innerHTML = comments.text;
// }

// displayComment(comments);

/* <section class="posted-comments">
       <0div class="posted-comments__user-comment">
         <0div class="posted-comments__placeholder-img"></div>
         <0div class="posted-comments__card">
            <0div class="posted-comments__name-date">
              <0p class="posted-comments__username">Connor Walton</p>
              <0p class="posted-comments__date">02/17/2021</p>
            </div>
            <0p class="posted-comments__text">
              This is art. This is inexplicable magic expressed in the purest
              way, everything that makes up this majestic work deserves
              reverence. Let us appreciate this for what it is and what it
              contains
            </p>
          </div>
        </div>

        <div class="posted-comments__user-comment">
          <div class="posted-comments__placeholder-img"></div>
          <div class="posted-comments__card">
            <div class="posted-comments__name-date">
              <p class="posted-comments__username">Connor Walton</p>
              <p class="posted-comments__date">02/17/2021</p>
            </div>
            <p class="posted-comments__text">
              This is art. This is inexplicable magic expressed in the purest
              way, everything that makes up this majestic work deserves
              reverence. Let us appreciate this for what it is and what it
              contains
            </p>
          </div>
        </div>

        <div class="posted-comments__user-comment">
          <div class="posted-comments__placeholder-img"></div>
          <div class="posted-comments__card">
            <div class="posted-comments__name-date">
              <p class="posted-comments__username">Connor Walton</p>
              <p class="posted-comments__date">02/17/2021</p>
            </div>
            <p class="posted-comments__text">
              This is art. This is inexplicable magic expressed in the purest
              way, everything that makes up this majestic work deserves
              reverence. Let us appreciate this for what it is and what it
              contains
            </p>
          </div>
        </div>
      </section> */
