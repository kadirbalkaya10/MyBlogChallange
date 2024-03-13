// DEPENDENCIES========================

const landpageRight = document.getElementById('landpage-rightSide');
const header = document.getElementById('header');
const submit = document.getElementById('submit');
const btnDarkTheme = document.querySelector('#btn-darktheme');

btnDarkTheme.addEventListener('click', () => {
  header.classList.toggle('dark-theme');
  landpageRight.classList.toggle('dark-theme');
  submit.classList.toggle('blue-submit');
});
