'use strict'
document.querySelector('.js-new-form');
//classList.remove("collapsed");
let kittenList= document.querySelector(".js-list");
const kittenImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenName = 'Anastacio';
const kittenRace = 'Siamés';
const kittenDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOne = `<li class="card"> <img class="card_img" src="${kittenImage}" alt="gatito"/> <h3 class="card_title"> ${kittenName} </h3> <h4 class="card_race"> ${kittenRace} </h4> <p class="card_description"> ${kittenDesc} </p> </li>`;

const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenRaceTwo = 'Sphynx';
const kittenDescTwo =
  ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwo = `<li class="card"> <img class="card_img" src="${kittenImageTwo}" alt="gatito"/> <h3 class="card_title"> ${kittenNameTwo} </h3> <h4 class="card_race"> ${kittenRaceTwo} </h4> <p class="card_description"> ${kittenDescTwo} </p> </li>`;

const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThree = 'Cielo';
const kittenRaceThree = 'Maine Coon';
const kittenDescThree =
  ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThree = `<li class="card"> <img class="card_img" src="${kittenImageThree}" alt="gatito"/> <h3 class="card_title"> ${kittenNameThree} </h3> <h4 class="card_race"> ${kittenRaceThree} </h4> <p class="card_description"> ${kittenDescThree} </p> </li>`;

kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;

