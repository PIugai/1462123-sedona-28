const searchForm = document.querySelector('.search-form');
const searchButton = document.querySelector('.search__btn');

searchButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle('visible');
});
