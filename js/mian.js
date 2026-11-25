
const menuHamburguesa = document.querySelector("#menuHamburguesa");
const opcionMenu = document.querySelector("#opcionMenu");
const iconoMenu = menuHamburguesa.querySelector("i");

//& Abrir y cerrar menú
menuHamburguesa.addEventListener("click", () => {

    opcionMenu.classList.toggle("activo");

    const menuAbierto = opcionMenu.classList.contains("activo");

    menuHamburguesa.setAttribute("aria-expanded", menuAbierto);

    if (menuAbierto) {
        iconoMenu.classList.replace("bx-menu", "bx-x");
        menuHamburguesa.setAttribute("aria-label", "Cerrar menú");
    } else {
        iconoMenu.classList.replace("bx-x", "bx-menu");
        menuHamburguesa.setAttribute("aria-label", "Abrir menú");
    }

});

//& Cerrar al seleccionar una opción
document.querySelectorAll(".navItem").forEach((enlace) => {

    enlace.addEventListener("click", () => {

        opcionMenu.classList.remove("activo");

        iconoMenu.classList.replace("bx-x", "bx-menu");

        menuHamburguesa.setAttribute("aria-expanded", "false");
        menuHamburguesa.setAttribute("aria-label", "Abrir menú");

    });

});

//& Cerrar al hacer clic fuera del menú
document.addEventListener("click", (evento) => {

    if (!menuHamburguesa.contains(evento.target) &&
        !opcionMenu.contains(evento.target)) {

        opcionMenu.classList.remove("activo");

        iconoMenu.classList.replace("bx-x", "bx-menu");

        menuHamburguesa.setAttribute("aria-expanded", "false");
        menuHamburguesa.setAttribute("aria-label", "Abrir menú");

    }

});
