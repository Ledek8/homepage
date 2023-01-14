console.log("Witam w konsoli!");

let imgLogoElement = document.querySelector(".js-imgLogo");
let imgConcertElement = document.querySelector(".js-imgConcert");
let imgArtistsElement = document.querySelector(".js-imgArtists");
let imagesElement = document.querySelector(".js-images");
let backgroundElement = document.querySelector(".js-body");
let buttonElement = document.querySelector(".js-button");
let themeElement = document.querySelector(".js-theme");
let themeCounterElement = document.querySelector(".js-themeCounter");
let counter = 0;

imgLogoElement.addEventListener("click", () => {
    imagesElement.innerHTML = "<img class=\"images__outline\" src=\"images/rhcpLogo.jpg\" alt=\"Logo RHCP\" width=\"400\">";
});

imgConcertElement.addEventListener("click", () => {
    imagesElement.innerHTML = "<img class=\"images__outline\" src=\"images/rhcpConcert.jpg\" alt=\"Koncert RHCP\" width=\"400\">";
});

imgArtistsElement.addEventListener("click", () => {
    imagesElement.innerHTML = "<img class=\"images__outline\" src=\"images/rhcpBand.jpg\" alt=\"Sesja zdjęciowa RHCP\" width=\"400\">";
});

buttonElement.addEventListener("click", () => {
    counter++;
    backgroundElement.classList.toggle("lightBackground");
    backgroundElement.classList.contains("lightBackground") ? (themeElement.innerText = "ciemny") : (themeElement.innerText = "jasny");
    themeCounterElement.innerHTML = "Liczba zmian motywu: <span id=\"js-counter\"></span>";
    document.getElementById("js-counter").innerHTML = counter;
});

