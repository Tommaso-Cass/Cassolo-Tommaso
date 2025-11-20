
let NavBarDropDown = document.querySelector("#navbarNavDropdown");
let navbarToggler = document.querySelector(".navbar-toggler");

document.addEventListener("click", function (evento) {



    let seMenuAperto = NavBarDropDown.classList.contains("show");

    // target.closet serve per selezionare tutti i i discendenti della nav bar
    let seClickNellaNavbar = evento.target.closest('.navbar');

    if (seMenuAperto && !seClickNellaNavbar) {
        navbarToggler.click();
    }
});