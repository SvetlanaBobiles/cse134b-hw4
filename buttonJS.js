document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-switch");
    const currentTheme = localStorage.getItem("theme");
  
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggle.textContent = "Light Mode";
    } else {
      themeToggle.textContent = "Dark Mode";
    }

    // Show the button if JS is enabled
    themeToggle.hidden = false;
  
    themeToggle.addEventListener("click", () => {
      const isDarkMode = document.documentElement.getAttribute("data-theme") === "dark";
      if (isDarkMode) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "Dark Mode";
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "Light Mode";
      }
    });
  });
  
  