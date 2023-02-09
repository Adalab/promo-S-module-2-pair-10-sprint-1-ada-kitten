'use strict'
const newFormElement = document.querySelector('.js-new-form');

let kittenList= document.querySelector(".js-list");

const renderKitten = (kittenData) => {
    const html =
     `<li class="card"> 
     <img class="card_img" src="${kittenData.image}" alt="gatito"/> 
     <h3 class="card_title"> ${kittenData.name} </h3> 
     <h4 class="card_race"> ${kittenData.race} </h4> 
     <p class="card_description"> ${kittenData.desc} </p> 
     </li>`;
     return html;
}

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

kittenList.innerHTML += renderKitten(kittenData_1);

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};

kittenList.innerHTML += renderKitten(kittenData_2);

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

kittenList.innerHTML += renderKitten(kittenData_3);

const buttonSearch = document.querySelector('.js-button-search');
const input_search_desc = document.querySelector('.js_in_search_desc');
 
const filterKitten = (event) => {
  event.preventDefault();
  kittenList.innerHTML = "";
  const descrSearchText = input_search_desc.value;
if( kittenData_1.desc.includes(descrSearchText) ) {
  kittenList.innerHTML += renderKitten(kittenData_1);
}

if( kittenData_2.desc.includes(descrSearchText) ) {
  kittenList.innerHTML += renderKitten(kittenData_2);
}

if( kittenData_3.desc.includes(descrSearchText) ) {
  kittenList.innerHTML += renderKitten(kittenData_3);
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

