const themeToggle = document.getElementById("theme-toggle");

function toggleTheme(event) {
  if (event.target.checked) {
    setTheme("dark");
  } else {
    setTheme("Light");
  }
}
function setTheme(themeName) {
  document.querySelector("html").setAttribute("data-theme", themeName);
}
document.addEventListener("DOMContentLoaded", showInitialTheme);
function showInitialTheme() {
  setInitialTheme();
  themeToggle.addEventListener("change", toggleTheme);
}
function setInitialTheme() {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (preferDarkMode) {
    themeToggle.checked = true;
    setTheme("dark");
  } else {
    themeToggle.checked = false;
    setTheme("light");
  }
}
