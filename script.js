function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    // if (menuBtn.className === "nav-menu") {
    //     menuBtn.className += "responsive";
    // } else {
    //     menuBtn.className = "nav-menu";
    // }

    const menuButton = document.getElementById("myNavMenu");
    menuButton.classList.toggle("responsive");
}

/*--------Dark Mode--------*/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});


/*--------Typing effect-------*/

var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})


/*-------Scroll Animation-------*/

const sr = ScrollReveal({
    origin: "top",
    distace: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".text-icons", { delay: 200 });
sr.reveal(".text-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });


const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})
srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });


/*--------active link--------*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrolly = window.scrolly;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);