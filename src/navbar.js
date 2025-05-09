const navbar = document.querySelector("#navbar")
const navbarItems = document.querySelectorAll(".nav-item-icon")

let isNavbarActive = false;

document.addEventListener("scroll", (ev) => {
    if (window.scrollY > 3) {
        if (isNavbarActive) return;
        isNavbarActive = true;
        navbar.classList.add("navbar-active")
        navbarItems.forEach((e) => {
            e.classList.add("nav-item-active")
        });

        return;
    };

    isNavbarActive = false;
    navbar.classList.remove("navbar-active");
    navbarItems.forEach((e) => {
        e.classList.remove("nav-item-active");
    });
});