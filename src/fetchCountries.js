
const URL = 'https:restcountries.com/v3.1/';


function fetchCountries(name) {
    console.log(name);
return fetch(
    `${URL}?name/${name}`
   ).then(response => response.json());
}

export { fetchCountries };

//https:restcountries.com/v3.1/name/{name}

