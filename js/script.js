// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });


    // =========================================
    // CLOSE MENU WHEN LINK IS CLICKED
    // =========================================
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        });
    });
}

// Keep the copyright year current.
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}