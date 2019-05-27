// Global Variables
const countriesList = document.getElementById("countries");
let countries; // will contain "fetched" data

// Event Listeners
// countriesList.addEventListener("change", event => displayCountryInfo(event.target.value));

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
  var val =countriesList.selectedIndex;
  sessionStorage.setItem("val", val);

  console.log("*****");
  console.log(val);
}

// fetch("https://restcountries.eu/rest/v2/all")
// .then(function(res){
//   // console.log(res);
//   return res.json();
// })
// .then(function(data){
//   // console.log(data);
//   initialize(data);
// })
// .catch(function(err){
//   console.log("Error:", err);
// });

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  // for(let i=0; i<countries.length; i++) {
  //   options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
  //   // options += `<option value="${countries[i].alpha3Code}">${countries[i].name} (+${countries[i].callingCodes[0]})</option>`;
  // }
  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);
  // document.getElementById("countries").innerHTML = options;
  // document.querySelector("#countries").innerHTML = options;
  countriesList.innerHTML = options;
  // console.log(countriesList);
  // console.log(countriesList.value);
  // console.log(countriesList.length);
  // console.log(countriesList.selectedIndex);
  // console.log(countriesList[10]);
  // console.log(countriesList[10].value);
  // console.log(countriesList[10].text);
var k = sessionStorage.getItem("val");
console.log("*** "+k);
countriesList.selectedIndex = Math.floor(k);

  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);

  document.querySelector("#flag-container img").src = countryData.flag;
  
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
  document.getElementById("capital").innerHTML = countryData.capital;
  var cap = document.getElementById("capital").innerHTML = countryData.capital;
  sessionStorage.setItem("cap", cap);
  console.log(cap);
  document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
  var dc = document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
  sessionStorage.setItem("dc", dc);
  console.log(dc);
  document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
  var pop = document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
  sessionStorage.setItem("pop", pop);
  console.log(pop);
  document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
  var curr = document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
  sessionStorage.setItem("curr", curr);
  console.log(curr);
  document.getElementById("region").innerHTML = countryData.region;
  var reg = document.getElementById("region").innerHTML = countryData.region;
  sessionStorage.setItem("reg", reg);
  console.log(reg);
  document.getElementById("subregion").innerHTML = countryData.subregion;
  var sr = document.getElementById("subregion").innerHTML = countryData.subregion;
  sessionStorage.setItem("sr", sr);
  console.log(sr);
}
