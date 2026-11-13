// AI Assistance Documentation
// Asked for help checking my JavaScript for a dark/light mode toggle
// button. The button wasn't responding when clicked.

// AI Output: Identified bugs in my code (an incorrect use of
// getElementById with a "#", and a typo in my theme comparison)
// and explained how event listeners work. Also suggested using
// localStorage to remember the visitor's theme choice.

// What I wrote myself: The selector for the toggle button, the
// if/else conditions, and the overall toggle logic.

// find the theme mode toggle button
const themeToggle = document.getElementById('theme-mode-toggle');

// function to toggle between light and dark mode
function updateToggle(theme) {
  if (theme === 'dark') {
    themeToggle.textContent = '☀️'; // sun icon for light mode
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    themeToggle.textContent = '🌙'; // moon icon for dark mode
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
}

// Checking the current theme
let currentTheme = localStorage.getItem("theme") || 'light';
document.documentElement.setAttribute('data-theme', currentTheme); // Apply the saved theme

// update the toggle button based on the current theme
updateToggle(currentTheme);

// update logo based on the current theme
updateLogo(currentTheme);

// add an event listener to the button to toggle the theme
themeToggle.addEventListener("click", function() {

    // Switch between light and dark mode
    if (currentTheme === 'light') {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }

    // Apply the new theme 
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update the toggle button
    updateToggle(currentTheme);

    // Update the logo based on the current theme
    updateLogo(currentTheme);

    localStorage.setItem("theme", currentTheme); // Save the user's preference
});

// Logo dark/light mode change
function updateLogo(theme) {
  const logo =document.querySelector('#site-logo');

  if (theme === 'dark') {
    logo.src = 'images/Dlogo2.png'; // Change to dark mode logo
  } else {
    logo.src = 'images/Dlogo.png'; // Change to light mode logo
  }
}

console.log(ScrollReveal); // Check if ScrollReveal is loaded

// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '40px',
    duration: 800,
    delay: 150,
    reset: false, //true for animations to repeat on scroll
});

// About Me Animations 
sr.reveal("#about", { 
  origin: 'bottom'
});

// Project Cards Animations
sr.reveal(".project-card", { 
  origin: 'bottom', 
  interval: 150
});

// Contact Animations
sr.reveal("#contact", { 
  origin: 'bottom'
});