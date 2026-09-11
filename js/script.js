// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

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