{
    const welcome = () => {
        console.log("siema");
    }
    welcome();

    const side = document.querySelector(".container");

    const toogleTheme = () => {
        const button = document.querySelector(".js-buttonSide");
        const headerH2 = document.querySelector(".header__h2");
        const articleHeader = document.querySelectorAll(".article__header"); // need help here ;d
        const tableCaption = document.querySelector(".article__tableCaption");
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
    }
    toogleTheme();

    const onSecretButtonClick = () => {
        const secretButton = document.querySelector(".secretRoom__buttonSecret");
        const secret = document.querySelector(".secretRoom__secretText")
        secretButton.addEventListener("click", () => {
            secret.innerHTML = "<h3>Dziękuje Za uwage ;). Zapraszam Na Slacka do wyrażenia opini:))</h3>";

        });
    }
    onSecretButtonClick();

    const onDestroyButtonClick = () => {
        const destroy = document.querySelector(".secretRoom__destroyButton");
        destroy.addEventListener("click", () => {
            side.remove();

        });
    };
    onDestroyButtonClick();
}