document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

           
            navLinks.classList.remove("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementPosition < screenHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }

    fadeInOnScroll(); // Run on page load
    window.addEventListener("scroll", fadeInOnScroll);
});
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".projects-container");
    
    function startAutoScroll() {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            container.scrollLeft += 1; // Adjust speed here
            scrollAmount += 1;

            // Reset scroll to start when it reaches the end
            if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, 30); // Adjust speed here (lower is faster)
    }

    startAutoScroll();
});
