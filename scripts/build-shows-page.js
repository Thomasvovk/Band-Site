const key = "ac75bb68-cbf2-4fe0-88ca-f67b40e88c1b";
const url = "https://project-1-api.herokuapp.com/showdates/";

function displayEverything() {
  axios
    .get(`${url}?api_key=${key}`)
    .then((response) => {
      response.data.forEach((show) => {
        displayshows(show);
      });
    })
    .then(() => {
      // clicking on a individual row make that row "selected"
      // the row should stay selected until another row is clicked
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
    });
}

displayEverything();

// Structure for Shows Section

const concertSection = document.querySelector(".shows");

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

const subheaderBlock = document.createElement("div");
subheaderBlock.classList.add("shows__subheader--block");
concertsContainer.appendChild(subheaderBlock);

const sectionSubtitleDate = document.createElement("div");
sectionSubtitleDate.classList.add("shows__info-subheader--display");
subheaderBlock.appendChild(sectionSubtitleDate);
sectionSubtitleDate.textContent = "DATE";

const sectionSubtitleVenue = document.createElement("div");
sectionSubtitleVenue.classList.add("shows__info-subheader--display");
subheaderBlock.appendChild(sectionSubtitleVenue);
sectionSubtitleVenue.textContent = "VENUE";

const sectionSubtitleLocation = document.createElement("div");
sectionSubtitleLocation.classList.add("shows__info-subheader--display");
subheaderBlock.appendChild(sectionSubtitleLocation);
sectionSubtitleLocation.innerText = "LOCATION";

// Loop for each Show

function displayshows(show) {
  const concertSubcontainer = document.createElement("div");
  concertSubcontainer.classList.add("shows__all-shows");
  concertsContainer.appendChild(concertSubcontainer);

  const dateInfo = document.createElement("div");
  dateInfo.classList.add("shows__container");
  dateInfo.classList.add("shows__date-container");
  concertSubcontainer.appendChild(dateInfo);

  const dateHeading = document.createElement("h3");
  dateHeading.classList.add("shows__info-subheader");
  dateInfo.appendChild(dateHeading);
  dateHeading.innerText = "DATE";

  const dateData = document.createElement("p");
  dateData.classList.add("shows__date");
  dateInfo.appendChild(dateData);
  dateData.innerText = new Date(show.date).toDateString();

  const venueInfo = document.createElement("div");
  venueInfo.classList.add("shows__container");
  venueInfo.classList.add("shows__venue-container");
  concertSubcontainer.appendChild(venueInfo);

  const venueHeading = document.createElement("h3");
  venueHeading.classList.add("shows__info-subheader");
  venueInfo.appendChild(venueHeading);
  venueHeading.innerText = "VENUE";

  const venueInfoText = document.createElement("p");
  venueInfoText.classList.add("shows__info");
  venueInfo.appendChild(venueInfoText);
  venueInfoText.innerText = show.place;

  const locationInfo = document.createElement("div");
  locationInfo.classList.add("shows__container");
  locationInfo.classList.add("shows__location-container");
  concertSubcontainer.appendChild(locationInfo);

  const locationHeading = document.createElement("h3");
  locationHeading.classList.add("shows__info-subheader");
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
}
