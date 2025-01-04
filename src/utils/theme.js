function theme() {
  if (localStorage.getItem("theme") == "light") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }
}

function loadTheme() {
  if (localStorage.getItem("theme") == null) {
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add(localStorage.getItem("theme"));
  }
}

export { theme, loadTheme };
