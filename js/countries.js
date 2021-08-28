const fetchApi = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

fetchApi();

const displayCountries = (countries) => {
    countries.forEach(country => {

        // console.log(country);
        const countriesElem = document.getElementById('countries');
        const singleCountry = document.createElement('div');
        singleCountry.classList.add('single-country');
        const singleCountryFlag = country.flag;
        singleCountry.innerHTML = `
        <h3>Country name: ${country.name}</h3>
        <h5>Capital: ${country.capital}</h5>
        <h5>Sub-Region: ${country.subregion}</h5>
        <img class="flag-design" src="${singleCountryFlag}">
        <button onclick="getCountryByName('${country.name}')"> Details </button>
        `;

        countriesElem.appendChild(singleCountry);
        
    });
}

const getCountryByName = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesByName(data))

    
};
const displayCountriesByName =  (countryByName) => {
    console.log(countryByName);

    const dynamicSection = document.getElementById('dynamic-details');
  

   countryByName.forEach(singleCountry => {
    const dynamicDiv = document.createElement('div');
    dynamicDiv.innerHTML = `
    <h3>Name: ${singleCountry.name}</h3>
    `;

    dynamicSection.appendChild(dynamicDiv);
   })
}