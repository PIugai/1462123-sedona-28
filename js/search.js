const searchForm = document.querySelector('.search-form');
const searchButton = document.querySelector('.search__btn');
const searchFormInput = searchForm.querySelectorAll('input');
const searchFormCheckIn = searchForm.querySelector('.search-form__check-in');

searchButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle('form-show');
  searchFormCheckIn.focus();
  if (searchForm.classList.contains('form-error')) {
    evt.preventDefault();
    searchForm.classList.remove('form-error');
  }
});

searchForm.addEventListener('submit', function(evt) {
  if (!searchFormInput.value) {
    evt.preventDefault();
    searchForm.classList.add('form-error');
    searchForm.offsetWidth = searchForm.offsetWidth;
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains('form-show')) {
      evt.preventDefault();
      searchForm.classList.remove('form-show');
      searchForm.classList.remove('form-error');
    }
  }
});
