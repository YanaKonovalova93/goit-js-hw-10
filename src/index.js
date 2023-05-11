import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputEl = document.getElementById('search-box');

inputEl.addEventListener(
  'input',
  debounce(onSearchCountryName, DEBOUNCE_DELAY)
);

function onSearchCountryName(e) {
  let nameCountry = e.target.value;

    console.log(nameCountry);
    
    fetchCountries(nameCountry).then(())
}
