const bodyMain = document.querySelector('body')
const sectionCard = document.createElement('section')
const title = document.createElement('h1')
const numberChanged = document.createElement('p')
const buttonIncremente = document.createElement('button')
const buttonDecremente = document.createElement('button', 'btn-decre')
const buttonReset = document.createElement('button')
const valueMax = document.createElement('input')
const limiteValue = document.createElement('p')

// Ajouter des classes aux boutons pour les différencier

buttonIncremente.className = 'btn-increment'
buttonDecremente.className = 'btn-decrement'
buttonReset.className = 'btn-reset'

// Ajout d'un titre

title.textContent = "Compteur";

//  création des élément

bodyMain.appendChild(sectionCard);
sectionCard.appendChild(title);
sectionCard.appendChild(numberChanged);
sectionCard.appendChild(buttonIncremente);
sectionCard.appendChild(buttonDecremente);
sectionCard.appendChild(buttonReset);
sectionCard.appendChild(valueMax);
sectionCard.appendChild(limiteValue);

numberChanged.innerText = 0;
buttonIncremente.innerText = "Ajouter +";
buttonDecremente.innerText = "Retirer -";
buttonReset.innerText = "Reset";

// -------------------------------------------------------------------------------------------
// Ajouter 1

let counter = 0;
let maxLimited = Infinity;
buttonAdd();
buttonRetired();
reset();
valeurLimite();

function buttonAdd(){
    buttonIncremente.addEventListener('click', () => {
        if (counter < maxLimited){
            counter++;
        numberChanged.innerText = counter;
        }
    } )

    return buttonIncremente
}

counter++;
        numberChanged.innerText = counter;

// -------------------------------------------------------------------------------------------

// Enlever 1

function buttonRetired(){

    buttonDecremente.addEventListener('click', () => {
        if (counter > 0){
            counter--;
        numberChanged.innerText = counter;
        }
    } );
    return buttonDecremente;
}

// -------------------------------------------------------------------------------------------
// Reset

function reset(){
    buttonReset.addEventListener('click', () => {
        counter = 0;
        numberChanged.innerText = counter;
    })
}

function valeurLimite(){
    valueMax.addEventListener('input', () =>{
        maxLimited = valueMax.value;
        limiteValue.innerText = `Compteur bloqué à ${valueMax.value}`;
    });
}









