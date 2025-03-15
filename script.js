document.addEventListener("DOMContentLoaded", function() {
    // Modo oscuro
    const toggleDarkMode = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
    } else {
        body.classList.add("light-mode");
    }

    toggleDarkMode.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
    });

    // Botón volver al inicio
    const backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function() {
        backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
