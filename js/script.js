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
    imagesElement.innerHTML = "<img class=\"images__outline\" src=\"https://seeklogo.com/images/R/red-hot-chili-peppers-logo-EE8D208474-seeklogo.com.png\" alt=\"Logo RHCP\" width=\"400\">";
});

imgConcertElement.addEventListener("click", () => {
    imagesElement.innerHTML = "<img class=\"images__outline\" src=\"https://i.pinimg.com/originals/07/4e/a4/074ea4a76a749170b80f1183ba348d48.jpg\" alt=\"Koncert RHCP\" width=\"400\">";
});

imgArtistsElement.addEventListener("click", () => {
    imagesElement.innerHTML = "<img class=\"images__outline\" src=\"https://www.francetvinfo.fr/pictures/YnJTqroQguN5Jg_6KHP_jFaGfcQ/1200x1200/2022/04/01/phpPAEw95.jpg\" alt=\"Sesja zdjęciowa RHCP\" width=\"400\">";
});

buttonElement.addEventListener("click", () => {
    counter++;
    backgroundElement.classList.toggle("lightBackground");
    backgroundElement.classList.contains("lightBackground") ? (themeElement.innerText = "ciemny") : (themeElement.innerText = "jasny");
    themeCounterElement.innerHTML = "Liczba zmian motywu: <span id=\"js-counter\"></span>";
    document.getElementById("js-counter").innerHTML = counter;
});

