const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const navbarHeight = navbar.offsetHeight;

function funcionPrincipal() {
    if (window.scrollY >= navbarOffsetTop) {
        navbar.classList.add("sticky");

        // Agrega padding para compensar el espacio perdido
        document.body.style.paddingTop = navbarHeight + "px";
    } else {
        navbar.classList.remove("sticky");

        // Quita el padding cuando vuelve a ser normal
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener("scroll", funcionPrincipal);
funcionPrincipal();


const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        fetch(`languages/${button.getAttribute("data-language")}.json`)
            .then((response) => response.json())
            .then((translations) => {
                textsToChange.forEach((element) => {
                    const section = element.getAttribute("data-section");
                    const value = element.getAttribute("data-value");
                    element.textContent = translations[section][value];
                });
            });
        });
    });
