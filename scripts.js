const baseURL= 'https://www.dnd5eapi.co/api/';
const myURL = 'https://my.api.mockaroo.com/api_project_1.json?key=08fcd730'
const detailURL = 'https://my.api.mockaroo.com/random_details.json?key=08fcd730'

let allButton = document.getElementById('all');
let raceButton = document.getElementById('race');
let statsButton = document.getElementById('stats');
let backgroundButton = document.getElementById('background');
let genDataButton = document.getElementById('generate');
let charactertop = document.querySelector('.charactertop');
let intro = document.querySelector('.intro');

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
};


//ALL BUTTON
allButton.addEventListener('click', allFunctions)

function allFunctions() {
  fetchRace();
  //Background....
  fetchBackground();
  //STATS RANDOMIZER
  rollStats();
  //General Information
  nonDNData();
};

//STATS Button
statsButton.addEventListener('click', rollStats)

function rollStats() {
    let randomNumOne = getRandomNumber(3, 18)
    let randomNumTwo = getRandomNumber(3, 18)
    let randomNumThree = getRandomNumber(3,18)
    let randomNumFour = getRandomNumber(3,18)
    let randomNumFive = getRandomNumber(3,18)
    let randomNumSix = getRandomNumber(3,18)

document.getElementById('str').innerHTML =`Strength: ${randomNumOne}`;
document.getElementById("dex").innerHTML =`Dexterity: ${randomNumTwo}`;
document.getElementById("con").innerHTML =`Constitution: ${randomNumThree}`;
document.getElementById("cha").innerHTML =`Charisma: ${randomNumFour}`;
document.getElementById("int").innerHTML =`Intelligence: ${randomNumFive}`;
document.getElementById("wis").innerHTML =`Wisdom: ${randomNumSix}`;
}

//RACE BUTTON
raceButton.addEventListener("click", fetchRace);
//RACE FETCH
async function fetchRace() {
  let response = await fetch(baseURL + `races`);
  let json = await response.json();
  displayRace(json);
}

//RACE DISPLAY
let displayRace = (json) => {
  let x = getRandomNumber(0, (json.results.length - 1));
  document.getElementById('rrace').innerHTML = `Race: ${json.results[x].name}`
} //closes race section

//BACKGROUND BUTTON
backgroundButton.addEventListener('click', fetchBackground);

async function fetchBackground() {
  let response = await fetch (baseURL + `backgrounds`);
  let json = await response.json();
  displayBackground(json);
}

let displayBackground = (json) => {
  let x = getRandomNumber(0, (json.results.length -1));
  document.getElementById('rbackground').innerHTML = `Background: ${json.results[x].name}`
}

function resetData() {
  window.location.reload();
}

genDataButton.addEventListener('click', nonDNData);

async function nonDNData() {
  let response = await fetch(myURL);
  let json = await response.json();
  console.log(json);
  displayData(json);
}

let displayData = (json) => {
  let x = getRandomNumber(0, (json.length -1))

  let name1 = document.createElement('p')
  name1.className = 'name1';
  name1.innerText = `First Name: ${json[x].first_name}`;
  name1.style = 'font-family: Montserrat; color: white;';

  let name2 = document.createElement('p')
  name2.className = 'name1';
  name2.innerText = `Last Name: ${json[x].last_name}`;
  name2.style = 'font-family: Montserrat; color: white;';

  let gender = document.createElement('p')
  gender.className = gender;
  gender.innerText = `Gender: ${json[x].gender}`;
  gender.style = 'font-family: Montserrat; color: white;';

  let animal = document.createElement('p')
  animal.className = animal;
  animal.innerText = `Favorite Animal: ${json[x]['favorite animal']}`;

  let color = document.createElement('p')
  color.className = color;
  color.innerText = `Favorite Color: ${json[x]['favorite color']}`;
  color.style = "font-family: Montserrat; color: white;";

  let movie = document.createElement('p')
  movie.className = movie;
  movie.innerText = `Favorite Movie: ${json[x]['favorite movie']}`;
  movie.style = 'font-family: Montserrat; color: white;';

  let language = document.createElement('p')
  language.className = language;
  language.innerText = `First Language: ${json[x]['first language']}`;
  language.style = 'font-family: Montserrat; color: white;';
 

charactertop.appendChild(name1);
charactertop.appendChild(name2);
charactertop.appendChild(gender);
charactertop.appendChild(animal);
charactertop.appendChild(color);
charactertop.appendChild(movie);
charactertop.appendChild(language);
charactertop.removeChild(intro);
};

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 