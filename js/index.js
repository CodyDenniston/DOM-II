// Your code goes here
const images = document.querySelectorAll(".img-content");
const text = document.querySelectorAll(".text-content");
const intro = document.querySelector(".container home");
const body = document.querySelectorAll('body');
const nav = document.querySelectorAll(".nav-link");
const logo = document.querySelector(".logo-heading");

    images.forEach (el => {
        el.addEventListener("mouseenter", () => {
            el.style.transform = "scale(1.15)";
            el.style.transition = "transform 0.3s";
        })
        el.addEventListener("mouseleave", () => {
            el.style.transform = "scale(1)";
        })
        el.addEventListener("contextmenu", () => {
            el.style.transform = "scale(0.2)"
        })
    })
    
    text.forEach (txt => {
        window.addEventListener("resize", () => {
            txt.style.color = "green";
           })
        txt.addEventListener("mouseenter", () => {
            txt.style.transform = "scale(1.1)";
            txt.style.transition = "transform 0.2s";
        })
        txt.addEventListener("mouseleave", () => {
            txt.style.transform = "scale(1)";
        })
        txt.addEventListener("click", () => {
            txt.style.color = "rebeccapurple";
        })
        txt.addEventListener("dblclick", () => {
            txt.style.color = "salmon";
            txt.style.transform = "scale(1.4)";
        })
        txt.addEventListener("mousedown", () => {
            txt.style.color = "firebrick";
        })
        txt.addEventListener("mousemove", () => {
            txt.style.transform = "scale(0.9)"
        })
        txt.addEventListener("contextmenu", () => {
            txt.style.transform = "scale(0.2)"
        })
    })

    nav.forEach (navText => {
        navText.addEventListener("select", () => {
            navText.style.color="rgb(100,149,237)";
            navText.style.transform = "scale(1.3)";
        })
    })
    nav.forEach (navText => {
        navText.addEventListener("keydown", () => {
            navText.style.color="rgb(100,149,237)";
            navText.style.transform = "scale(1.3)";
        })
    })

    body.forEach (bod => {
        bod.addEventListener("scroll", () => {
            bod.style.backgroundColor="black";
        })
    })

    logo.addEventListener("keydown", () => {
        logo.style.color="rgb(100,149,237)";
        logo.style.transform = "scale(1.3)";
    })