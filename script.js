// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(5,8,22,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";

    }

    else{

        navbar.style.background = "rgba(5,8,22,0.8)";
        navbar.style.boxShadow = "none";

    }

});

// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
    ".section-title, .project-card, .service-card, .skill-card, .timeline-item, .achievement-card, .testimonial-card, .cert-box, .education-card, .stat-card"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("active-reveal");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================= HERO FADE EFFECT =================

const heroTitle = document.querySelector(".hero-content h1");

heroTitle.style.opacity = "0";
heroTitle.style.transform = "translateY(40px)";

setTimeout(() => {

    heroTitle.style.transition = "1s ease";

    heroTitle.style.opacity = "1";

    heroTitle.style.transform = "translateY(0)";

}, 300);

// ================= PROJECT CARD TILT EFFECT =================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * 10;
        const rotateY = ((x / rect.width) - 0.5) * -10;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active-link");

        }

    });

});


// ================= FLOATING GLOW EFFECT =================

const glow = document.querySelector(".glow-circle");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glow.style.transform =
        `translate(${x * 40}px, ${y * 40}px)`;

});



// ================= SCROLL TO TOP BUTTON =================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

document.body.appendChild(scrollBtn);

scrollBtn.classList.add("scroll-top-btn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        scrollBtn.classList.add("show-scroll");

    }

    else{

        scrollBtn.classList.remove("show-scroll");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ================= PARALLAX HERO EFFECT =================

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const heroImage = document.querySelector(".hero-image");

    heroImage.style.transform =
        `translateY(${scrollPosition * 0.08}px)`;

});

// ================= DYNAMIC YEAR =================

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML =
`© ${currentYear} Lordson Anson. All Rights Reserved.`;

// ================= CONSOLE MESSAGE =================

console.log(
    "%cPortfolio Website Developed Successfully",
    "color:#ff7b00; font-size:18px; font-weight:bold;"
);

// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    navMenu.classList.toggle("active");

});

// CLOSE MENU WHEN LINK IS CLICKED

const mobileLinks = document.querySelectorAll(".nav-menu a");

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");

        navMenu.classList.remove("active");

    });

});

// ================= LOADING SCREEN =================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide-loader");

    }, 3200);

});



// ================= CUSTOM CURSOR =================

const cursorDot = document.querySelector(".cursor-dot");

const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

});

// HOVER EFFECT

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .service-card"
);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorOutline.classList.add("cursor-hover");

    });

    element.addEventListener("mouseleave", () => {

        cursorOutline.classList.remove("cursor-hover");

    });

});

