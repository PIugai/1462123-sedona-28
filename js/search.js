const searchForm = document.querySelector('.search-form');
const searchButton = document.querySelector('.search__btn');
const searchFormCheckIn = searchForm.querySelector('.search-form__check-in');
const searchFormCheckout = searchForm.querySelector('.search-form__check-out');
const searchFormGuests = searchForm.querySelector('.search-form__guests');

searchButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle('form-hide');
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
    alert('Form sent');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (searchForm.classList.contains('search-form')) {
      evt.preventDefault();
      searchForm.classList.add('form-hide');
      searchForm.classList.remove('form-error');
    }
  }
});