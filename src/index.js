import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');
const divCountryEl = document.querySelector('.country-info');
const listCountryEl = document.querySelector('.country-list');

inputEl.addEventListener(
  'input',
  debounce(onSearchCountryName, DEBOUNCE_DELAY)
);

function onSearchCountryName(e) {
  let nameCountry = e.target.value;

  console.log(nameCountry);

  console.log(fetchCountries(nameCountry));

  fetchCountries(nameCountry).then(countries => {
    countries.forEach(country => {
      const markup = createMarkup(country);
      return updateNewsList(markup);
    });
  });
}

function createMarkup({ name, capital, population, languages }) {
  let markup = `
  <div class="country-card">
  
    <h2 class="country-name">${name.official}</h2>
    <h3 class="country-capital">Capital: ${capital}</h3>
    <h3 class="country-population">Population: ${population}</h3>
    <h3 class="country-languages">Languages: ${languages}</h3>
    
  </div>`;
    
    return markup;
}

function updateNewsList(markup) {
  return (divCountryEl.innerHTML = markup);
}
