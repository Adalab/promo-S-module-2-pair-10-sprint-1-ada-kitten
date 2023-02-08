'use strict'
const newFormElement = document.querySelector('.js-new-form');

let kittenList= document.querySelector(".js-list");
function renderKitten(url, desc, name, race) {
    return `<li class="card"> <img class="card_img" src="${url}" alt="gatito"/> <h3 class="card_title"> ${name} </h3> <h4 class="card_race"> ${race} </h4> <p class="card_description"> ${desc} </p> </li>`;
} 

const kittenImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenName = 'Anastacio';
const kittenRace = 'Siamés';
const kittenDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';

const kittenOne = renderKitten(kittenImage, kittenDesc , kittenName, kittenRace);

const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenRaceTwo = 'Sphynx';
const kittenDescTwo =
  ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwo = renderKitten(kittenImageTwo, kittenDescTwo , kittenNameTwo, kittenRaceTwo);

const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThree = 'Cielo';
const kittenRaceThree = 'Maine Coon';
const kittenDescThree =
  ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThree = renderKitten(kittenImageThree, kittenDescThree , kittenNameThree, kittenRaceThree);

const buttonSearch = document.querySelector('.js-button-search');
const input_search_desc = document.querySelector('.js_in_search_desc');
 
const filterKitten = (event) => {
  event.preventDefault();
  kittenList.innerHTML = "";
  const descrSearchText = input_search_desc.value;
if( kittenDesc.includes(descrSearchText) ) {
  kittenList.innerHTML += kittenOne;
}

if( kittenDescTwo.includes(descrSearchText) ) {
  kittenList.innerHTML += kittenTwo;
}

if( kittenDescThree.includes(descrSearchText) ) {
  kittenList.innerHTML += kittenThree;
}
}

buttonSearch.addEventListener('click', filterKitten); 

const linkNewFormElement = document.querySelector('.js-menu');

const btnCancel = document.querySelector(".js-btn-cancel");

const cancelNewKitten = (event) => { return hideNewCatForm()};

btnCancel.addEventListener('click', (cancelNewKitten));

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

linkNewFormElement.addEventListener('click', handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    return showNewCatForm();
  } else {
    return hideNewCatForm();
  }
}
const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

btnAdd.addEventListener('click', addNewKitten);

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
     labelMessageError.innerHTML ="¡Uy! parece que has olvidado algo";
  } else {
  }
}

