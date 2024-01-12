function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// script.js
function toggleDarkMode() {
    var darkModeStylesheet = document.getElementById("dark-mode-stylesheet");
    darkModeStylesheet.disabled = !darkModeStylesheet.disabled;
  }