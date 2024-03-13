// DEPENDENCIES================

const textInput = document.querySelector('#text-input');
const titleInput = document.querySelector('#title-input');
const contentInput = document.querySelector('#content-input');
const submitButton = document.querySelector('#submit');

// Dataa===============================

//Fuctions==============================

const addToLocalStorage = function () {
  localStorage.setItem('Text', textInput.value);
  localStorage.setItem('Title', titleInput.value);
  localStorage.setItem('Content', contentInput.value);
  location.href = '/blog.html';
};

//User Interactions==============================

submitButton.addEventListener('click', addToLocalStorage);
