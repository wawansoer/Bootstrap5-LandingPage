const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

function setTheme(theme) {
    htmlEl.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    themeToggle.innerHTML =
        newTheme === "dark"
            ? '<i class="bi bi-sun"></i>'
            : '<i class="bi bi-moon-stars"></i>';
});

// Initialize theme
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);
