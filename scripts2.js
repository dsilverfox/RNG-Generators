const baseURL = "https://www.dnd5eapi.co/api/";
const myURL = "https://my.api.mockaroo.com/api_project_1.json?key=08fcd730";
const detailURL =
  "https://my.api.mockaroo.com/random_details.json?key=08fcd730";

const unsplash =
  "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max";

let allButton = document.getElementById("id1");
let favoritesButton = document.getElementById("id2");
let occupationButton = document.getElementById("id3");
let carButton = document.getElementById("id4");
let demographicsButton = document.getElementById("id5");
let character = document.querySelector(".character");
let characterleft = document.querySelector('.characterleft')
let characterright = document.querySelector(".characterright");
let placeholder = document.querySelector(".placeholder");
let picButton = document.querySelector(".pic")

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

//Reset Button
function resetData() {
  window.location.reload();
}

//Data Fetch and Display
allButton.addEventListener("click", detailData);

async function detailData() {
  let response = await fetch(detailURL);
  let json = await response.json();
  console.log(json);
  displayData(json);
}

let displayData = (json) => {
  let x = getRandomNumber(0, json.length - 1);

  //Favorites

  let animal = document.createElement('li');
  animal.className = "animal";
  animal.innerText = `Favorite Animal: ${json[x].animal}`;
  animal.style = "font-family: Montserrat; color: white;";

  let plant = document.createElement("li");
  plant.className = "plant";
  plant.innerText = `Favorite Plant: ${json[x].plant}`;
  plant.style = "font-family: Montserrat; color: white;";

  let genres = document.createElement("li");
  genres.className = "genres";
  genres.innerText = `Genres: ${json[x].genres}`;
  genres.style = "font-family: Montserrat; color: white;";

  let color = document.createElement("li");
  color.className = "color";
  color.innerText = `Favorite Color: ${json[x].color}`;
  color.style = "font-family: Montserrat; color: white;";

  //Occupations
  let companies = document.createElement("li");
  companies.className = "companies";
  companies.innerText = `Company: ${json[x].companies}`;
  companies.style = "font-family: Montserrat; color: white;";

  let slogan = document.createElement("li");
  slogan.className = "slogan";
  slogan.innerText = `Company Slogan: ${json[x].slogan}`;
  slogan.style = "font-family: Montserrat; color: white;";

  let job = document.createElement("li");
  job.className = "job";
  job.innerText = `Job Title: ${json[x].job}`;
  job.style = "font-family: Montserrat; color: white;";

  let catch_phrase = document.createElement("li");
  catch_phrase.className = "catch_phrase";
  catch_phrase.innerText = `Interview Catch Phrase: ${json[x].catch_phrase}`;
  catch_phrase.style = "font-family: Montserrat; color: white;";

  let buzzword = document.createElement("li");
  buzzword.className = "buzzword";
  buzzword.innerText = `Favorite Plant: ${json[x].buzzword}`;
  buzzword.style = "font-family: Montserrat; color:white;";

  //Car
  let make = document.createElement("li");
  make.className = "make";
  make.innerText = `Make: ${json[x].make}`;
  make.style = "font-family: Montserrat; color: white;";

  let model = document.createElement("li");
  model.className = "model";
  model.innerText = `Model: ${json[x].model}`;
  model.style = "font-family: Montserrat; color: white;";

  let year = document.createElement("li");
  year.className = "year";
  year.innerText = `Year: ${json[x].year}`;
  year.style = "font-family: Montserrat; color: white;";

  //Demographics
  let race = document.createElement("li");
  race.className = "race";
  race.innerText = `Race: ${json[x].race}`;
  race.style = "font-family: Montserrat; color: white;";

  let university = document.createElement("li");
  university.className = "university";
  university.innerText = `University: ${json[x].university}`;
  university.style = "font-family: Montserrat; color: white;";

  let city = document.createElement("li");
  city.className = "city";
  city.innerText = `City: ${json[x].city}`;
  city.style = "font-family: Montserrat; color: white;";

  let state = document.createElement("li");
  state.className = "state";
  state.innerText = `State: ${json[x].state}`;
  state.style = "font-family: Montserrat; color: white;";

  let country = document.createElement("li");
  country.className = "country";
  country.innerText = `Country: ${json[x].country}`;
  country.style = "font-family: Montserrat; color: white;";

  //HTML BUILD

  characterleft.appendChild(animal);
  characterleft.appendChild(plant);
  characterleft.appendChild(genres);
  characterleft.appendChild(color);
  characterleft.appendChild(companies);
  characterleft.appendChild(job);
  characterleft.appendChild(slogan);
  characterleft.appendChild(catch_phrase);
  characterleft.appendChild(buzzword);
  characterleft.appendChild(make);
  characterleft.appendChild(model);
  characterleft.appendChild(year);
  characterleft.appendChild(race);
  characterleft.appendChild(university);
  characterleft.appendChild(city);
  characterleft.appendChild(state);
  characterleft.appendChild(country);
};

favoritesButton.addEventListener("click", favData);
async function favData() {
  let response = await fetch(detailURL);
  let json = await response.json();
  console.log(json);
  displayFav(json);
}

let displayFav = (json) => {
  let x = getRandomNumber(0, json.length - 1);

  let animal = document.createElement("p");
  animal.className = "animal";
  animal.innerText = `Favorite Animal: ${json[x].animal}`;
  animal.style = "font-family: Montserrat; color: white;";

  let plant = document.createElement("p");
  plant.className = "plant";
  plant.innerText = `Favorite Plant: ${json[x].plant}`;
  plant.style = "font-family: Montserrat; color: white;";

  let genres = document.createElement("p");
  genres.className = "genres";
  genres.innerText = `Genres: ${json[x].genres}`;
  genres.style = "font-family: Montserrat; color: white;";

  let color = document.createElement("p");
  color.className = "color";
  color.innerText = `Favorite Color: ${json[x].color}`;
  color.style = "font-family: Montserrat; color: white;";

  //FAVORiTES HTMl

  characterleft.appendChild(animal);
  characterleft.appendChild(plant);
  characterleft.appendChild(genres);
  characterleft.appendChild(color);
};

occupationButton.addEventListener("click", jobData);
async function jobData() {
  let response = await fetch(detailURL);
  let json = await response.json();
  console.log(json);
  displayJob(json);
}

let displayJob = (json) => {
  let x = getRandomNumber(0, json.length - 1);

  let companies = document.createElement("p");
  companies.className = "companies";
  companies.innerText = `Company: ${json[x].companies}`;
  companies.style = "font-family: Montserrat; color: white;";

  let slogan = document.createElement("p");
  slogan.className = "slogan";
  slogan.innerText = `Company Slogan: ${json[x].slogan}`;
  slogan.style = "font-family: Montserrat; color: white;";

  let job = document.createElement("p");
  job.className = "job";
  job.innerText = `Job Title: ${json[x].job}`;
  job.style = "font-family: Montserrat; color: white;";

  let catch_phrase = document.createElement("p");
  catch_phrase.className = "catch_phrase";
  catch_phrase.innerText = `Interview Catch Phrase: ${json[x].catch_phrase}`;
  catch_phrase.style = "font-family: Montserrat; color: white;";

  let buzzword = document.createElement("p");
  buzzword.className = "buzzword";
  buzzword.innerText = `Buzzword: ${json[x].buzzword}`;
  buzzword.style = "font-family: Montserrat; color:white;";


  //OCCUPATiONS HTML

  characterleft.appendChild(companies);
  characterleft.appendChild(job);
  characterleft.appendChild(slogan);
  characterleft.appendChild(catch_phrase);
  characterleft.appendChild(buzzword);
};

carButton.addEventListener("click", carData);
async function carData() {
  let response = await fetch(detailURL);
  let json = await response.json();
  console.log(json);
  displayCar(json);
}

let displayCar = (json) => {
  let x = getRandomNumber(0, json.length - 1);

  let make = document.createElement("p");
  make.className = "make";
  make.innerText = `Make: ${json[x].make}`;
  make.style = "font-family: Montserrat; color: white;";

  let model = document.createElement("p");
  model.className = "model";
  model.innerText = `Model: ${json[x].model}`;
  model.style = "font-family: Montserrat; color: white;";

  let year = document.createElement("p");
  year.className = "year";
  year.innerText = `Year: ${json[x].year}`;
  year.style = "font-family: Montserrat; color: white;";

  //CAR HTML

  characterleft.appendChild(make);
  characterleft.appendChild(model);
  characterleft.appendChild(year);
};

demographicsButton.addEventListener("click", demographicsData);
async function demographicsData() {
  let response = await fetch(detailURL);
  let json = await response.json();
  console.log(json);
  displayDemo(json);
}

let displayDemo = (json) => {
let x = getRandomNumber(0, json.length - 1);

  let race = document.createElement("p");
  race.className = "race";
  race.innerText = `Race: ${json[x].race}`;
  race.style = "font-family: Montserrat; color: white;";

  let university = document.createElement("p");
  university.className = "university";
  university.innerText = `University: ${json[x].university}`;
  university.style = "font-family: Montserrat; color: white;";

  let city = document.createElement("p");
  city.className = "city";
  city.innerText = `City: ${json[x].city}`;
  city.style = "font-family: Montserrat; color: white;";

  let state = document.createElement("p");
  state.className = "state";
  state.innerText = `State: ${json[x].state}`;
  state.style = "font-family: Montserrat; color: white;";

  let country = document.createElement("p");
  country.className = "country";
  country.innerText = `Country: ${json[x].country}`;
  country.style = "font-family: Montserrat; color: white;";


  //DEMOGRAPHiCS HTML

  characterleft.appendChild(race);
  characterleft.appendChild(university);
  characterleft.appendChild(city);
  characterleft.appendChild(state);
  characterleft.appendChild(country);
};

//Unsplash Random Photos
let Rand = '/photos/random';

// picButton.addEventListener("click", randPhoto);

// async function randPhoto() {
//   let response = await fetch(unsplash + Rand);
//   console.log(response);
//   displayPhoto(response);
// };

// let displayPhoto = (response) => {

// let photo = document.createElement(img);
// photo.className = 'pic';
// photo.innerText = `Photo Prompt: ${photo}`;

// console.log(photo);

// characterright.appendChild('img');
// };


//Responsive topnav.
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
