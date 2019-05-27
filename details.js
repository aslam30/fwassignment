// Global Variables
const countriesList = document.getElementById("countries");
let countries; // will contain "fetched" data

function goBack() {
  window.history.back();
}

// Event Listeners
// countriesList.addEventListener("change", event => displayCountryInfo(event.target.value));

countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}
var pop = sessionStorage.getItem("pop");
var curr = sessionStorage.getItem("curr");
var reg = sessionStorage.getItem("reg");
var sub = sessionStorage.getItem("sub");
var dc = sessionStorage.getItem("dc");
var cap = sessionStorage.getItem("cap");
var sr = sessionStorage.getItem("sr");
var val = sessionStorage.getItem("pop");
console.log(pop)
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
  //document.querySelector("#flag-container img").src = countryData.flag;
  //document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
  document.getElementById("capital").innerHTML = cap;
  document.getElementById("dialing-code").innerHTML = dc;
  document.getElementById("population").innerHTML = pop;
  document.getElementById("currencies").innerHTML = curr;
  document.getElementById("region").innerHTML = reg;
  document.getElementById("subregion").innerHTML = sr;
}