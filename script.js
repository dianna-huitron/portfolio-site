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
let currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

// update the toggle button based on the current theme
updateToggle(currentTheme);

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
});