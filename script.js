///// AOS INIT
AOS.init();

///// CHANGE NAVBAR TRANSPARENT WHILE SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {

    navbar.style.transition = "0.5s";
    navbar.classList.toggle("active", window.scrollY > 80);

});

///// NAVBAR BUTTON CLICK
const navLinks = document.querySelectorAll(".nav-link"); 
navLinks[0].classList.add("active");

navLinks.forEach(function(navLink) {

    navLink.addEventListener("click", function() {
       
        navLinks.forEach(function(navbarLink) {

            navbarLink.classList.remove("active");

        });

        navLink.classList.add("active");

    });

});

///// NAVBAR SCROLL SPY
const sections = document.querySelectorAll("section");
const activationOffset = window.innerHeight * 0.65;

window.addEventListener("scroll", function() {

    let activeSection = null;

    sections.forEach(function(section) {

        let sectionBoundary = section.offsetTop - activationOffset;

        if( window.scrollY >= sectionBoundary ) {

            activeSection = section;

        }

    });

    navLinks.forEach(function(navLink) {

        const navLinkTarget = navLink.getAttribute("href").replace("#", "");

        if( navLinkTarget === activeSection.id ) navLink.classList.add("active");

        else navLink.classList.remove("active");

    });

});

///// DOWNLOAD CV NAVBAR BUTTON
const downloadCv = document.querySelector("button.download-cv");

downloadCv.addEventListener("click", function() {

    const downloadLink = document.createElement("a");

    downloadLink.href = "assets/cv/Ahmad Mubarak CV.pdf";
    downloadLink.download = "Ahmad Mubarak CV.pdf";

    downloadLink.click();

});

///// BACK TO TOP BUTTON
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function() {

    backToTop.classList.toggle("active", window.scrollY > 550);

});
