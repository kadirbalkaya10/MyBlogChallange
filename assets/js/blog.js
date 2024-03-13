// DEPENDENCIES========================

// Landpage right side
const landpageRight = document.getElementById('landpage-rightSide');
// Header
const header = document.getElementById('header');
// Submit button
const submit = document.getElementById('submit');
// Dark theme switcher button
const btnDarkTheme = document.querySelector('#btn-darktheme');

// When we click button
btnDarkTheme.addEventListener('click', () => {
  // Add class ="dark-theme " to header
  header.classList.toggle('dark-theme');
  //   Toggle class to lanpage right coitainer make it darker, when we click and removes to class from that element.
  landpageRight.classList.toggle('dark-theme');
  //   Toggle class to submit button to make it blue ,when we click and removes to class from that element.
  submit.classList.toggle('blue-submit');
});
