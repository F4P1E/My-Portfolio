document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Check the current theme from localStorage or default to light
    const currentTheme = localStorage.getItem("theme") || "light";
    body.classList.add(currentTheme);

    themeToggleButton.addEventListener("click", () => {
        // Toggle between light and dark themes
        if (body.classList.contains("light")) {
            body.classList.remove("light");
            body.classList.add("dark");
            localStorage.setItem("theme", "dark"); // Save theme preference
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
            localStorage.setItem("theme", "light"); // Save theme preference
        }
    });
});
