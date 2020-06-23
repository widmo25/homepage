console.log("siema");

let button = document.querySelector(".js-buttonSide");
let side = document.querySelector(".container");
let secretButton = document.querySelector(".secretRoom__buttonSecret");
let secret = document.querySelector(".secretRoom__secretText")
let destroy = document.querySelector(".secretRoom__destroyButton");
let headerH2 = document.querySelector(".header__h2");
let articleHeader = document.querySelectorAll(".article__header"); // need help here ;d
let tableCaption = document.querySelector(".article__tableCaption");

//change theme
button.addEventListener("click", () => {
    side.classList.toggle("dark");
    headerH2.classList.toggle("header__h2--dark");
    articleHeader.classList.toggle("article__header--dark");
    tableCaption.classLista.toggle("article__tableCaption--dark");
    if (button.innerText === "Przejdź na mroczną strone mocy") {
        button.innerText = "Przejdź na jasną strone mocy";
    } else {
        button.innerText = "Przejdź na mroczną strone mocy";
    }
});
//add secret text
secretButton.addEventListener("click", () => {
    secret.innerHTML = "<h3>Dziękuje Za uwage ;). Zapraszam Na Slacka do wyrażenia opini:))</h3>";
    
});

destroy.addEventListener("click", () => {
    side.remove();

});