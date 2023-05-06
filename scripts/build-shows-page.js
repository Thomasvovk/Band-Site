const shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },

  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const concertSection = document.getElementById("shows");

const titleContainer = document.createElement("div");
titleContainer.classList.add("shows__box");
concertSection.appendChild(titleContainer);

const sectionTitle = document.createElement("h2");
sectionTitle.classList.add("shows__title");
titleContainer.appendChild(sectionTitle);
sectionTitle.textContent = "Shows";

const concertsContainer = document.createElement("div");
concertsContainer.classList.add("shows__box-all-shows");
concertSection.appendChild(concertsContainer);

function displayshows(shows) {
  shows.forEach((show) => {
    const concertSubcontainer = document.createElement("div");
    concertSubcontainer.classList.add("shows__all-shows");
    concertsContainer.appendChild(concertSubcontainer);

    const dateInfo = document.createElement("div");
    dateInfo.classList.add("shows__container");
    dateInfo.classList.add("shows__date-container");
    concertSubcontainer.appendChild(dateInfo);

    const dateHeading = document.createElement("h3");
    dateHeading.classList.add("shows__info-subheader");
    // dateHeading.classList.add("shows__info-subheader--hidden");
    dateInfo.appendChild(dateHeading);
    dateHeading.innerText = "DATE";

    const dateData = document.createElement("p");
    dateData.classList.add("shows__date");
    dateInfo.appendChild(dateData);
    dateData.innerText = show.date;

    const venueInfo = document.createElement("div");
    venueInfo.classList.add("shows__container");
    venueInfo.classList.add("shows__venue-container");
    concertSubcontainer.appendChild(venueInfo);

    const venueHeading = document.createElement("h3");
    venueHeading.classList.add("shows__info-subheader");
    // venueHeading.classList.add("shows__info-subheader--hidden");
    venueInfo.appendChild(venueHeading);
    venueHeading.innerText = "VENUE";

    const venueInfoText = document.createElement("p");
    venueInfoText.classList.add("shows__info");
    venueInfo.appendChild(venueInfoText);
    venueInfoText.innerText = show.venue;

    const locationInfo = document.createElement("div");
    locationInfo.classList.add("shows__container");
    locationInfo.classList.add("shows__location-container");
    concertSubcontainer.appendChild(locationInfo);

    const locationHeading = document.createElement("h3");
    locationHeading.classList.add("shows__info-subheader");
    // locationHeading.classList.add("shows__info-subheader--hidden");
    locationInfo.appendChild(locationHeading);
    locationHeading.innerText = "LOCATION";

    const locationText = document.createElement("p");
    locationText.classList.add("shows__info");
    locationInfo.appendChild(locationText);
    locationText.innerText = show.location;

    const showsButton = document.createElement("div");
    showsButton.classList.add("shows__button-container");
    concertSubcontainer.appendChild(showsButton);

    const buyTickets = document.createElement("button");
    buyTickets.classList.add("shows__buy-button");
    showsButton.appendChild(buyTickets);
    buyTickets.innerText = "BUY TICKETS";
  });
}

displayshows(shows);

// function selectRow(shows) {
//   const rowSelected = document.querySelectorAll(".shows__all-shows");
//   rowSelected.forEach((row) => {
//     row.addEventListener("click", () => {
//       row.classList.add("shows__all-shows--selected");
//     });
//   });
// }

// selectRow(shows);

function selectRow(shows) {
  const rows = document.querySelectorAll(".shows__all-shows");
  let selectedRow = null;

  rows.forEach((row) => {
    row.addEventListener("click", () => {
      if (selectedRow) {
        selectedRow.classList.remove("shows__all-shows--selected");
      }

      row.classList.add("shows__all-shows--selected");
      selectedRow = row;
    });
  });
}

selectRow(shows);

// Pseudocode
// 1. clicking on a individual row make that row "selected"
// 2. the row should stay selected until another row is clicked
