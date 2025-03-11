
window.addEventListener("scroll", () => {
    document.querySelectorAll(".animate").forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";
        }
    });
});
