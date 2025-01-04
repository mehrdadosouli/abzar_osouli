function theme() {
  if (localStorage.getItem("theme") == "light") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    document.documentElement.style.backgroundColor="#1E2026"
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
    document.documentElement.style.backgroundColor="#ffffff"
  }
}

function loadTheme() {
  if (localStorage.getItem("theme") == null) {
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
    document.documentElement.style.backgroundColor="#ffffff"
  } else {
    document.documentElement.classList.add(localStorage.getItem("theme"));
    document.documentElement.style.backgroundColor=localStorage.getItem("theme") == 'light' ? "#ffffff" : "#1E2026" 
  }
}

export { theme, loadTheme };
