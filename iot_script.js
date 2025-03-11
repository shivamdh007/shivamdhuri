document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

  
    const techStack = [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "LoRa", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/LoRa-logo.png" }
    ];

    const techContainer = document.getElementById("tech-logos");
    techContainer.innerHTML = techStack.map(item => `
        <div class="logo-item">
            <img src="${item.logo}" alt="${item.name}" />
            <p>${item.name}</p>
        </div>
    `).join("");
});
