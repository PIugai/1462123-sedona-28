const searchForm = document.querySelector('.search-form');
const searchButton = document.querySelector('.search__btn');
const searchFormCheckIn = searchForm.querySelector('.search-form__check-in');
const searchFormCheckout = searchForm.querySelector('.search-form__check-out');
const searchFormGuests = searchForm.querySelector('.search-form__guests');

searchForm.classList.remove('form-show');

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
  if (
    !searchFormCheckIn.value ||
    !searchFormCheckout.value ||
    !searchFormGuests.value
  ) {
    evt.preventDefault();
    searchForm.classList.add('form-error');
    console.log('error');
  } else {
    searchForm.classList.remove('form-error');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains('search-form')) {
      evt.preventDefault();
      searchForm.classList.remove('form-show');
      searchForm.classList.remove('form-error');
    }
  }
});
