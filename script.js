const bodyMain = document.querySelector('body')
const sectionCard = document.createElement('section')
const title = document.createElement('h1')
const numberChanged = document.createElement('p')
const buttonIncremente = document.createElement('button')
const buttonDecremente = document.createElement('button', 'btn-decre')
const buttonReset = document.createElement('button')
const valueMax = document.createElement('input')
const donneValeur = document.createElement('p')
const limiteValue = document.createElement('p')

// Ajouter des classes aux boutons pour les différencier

buttonIncremente.className = 'btn-increment'
buttonDecremente.className = 'btn-decrement'
buttonReset.className = 'btn-reset'
limiteValue.className = 'Valeur'

//  création des élément

bodyMain.appendChild(sectionCard);
sectionCard.appendChild(title);
sectionCard.appendChild(numberChanged);
sectionCard.appendChild(buttonIncremente);
sectionCard.appendChild(buttonDecremente);
sectionCard.appendChild(buttonReset);
sectionCard.appendChild(donneValeur);
sectionCard.appendChild(limiteValue);
sectionCard.appendChild(valueMax);


// -------------------------------------------------------------------------------------------

// Ajout d'un titre

title.textContent = "My counter";
valueMax.placeholder = "Indiquer la valeur max:";
numberChanged.innerText = 0;
buttonIncremente.innerText = "Ajouter +";
buttonDecremente.innerText = "Retirer -";
buttonReset.innerText = "Reset";

// -------------------------------------------------------------------------------------------
// Variable

let counter = 0;
let maxLimited = Infinity;

// -------------------------------------------------------------------------------------------

// Appel des fonctions

buttonAdd();
buttonRetired();
reset();
valeurLimite();

// -------------------------------------------------------------------------------------------

// Ajouter 1

function buttonAdd(){
    buttonIncremente.addEventListener('click', () => {
        if (counter < maxLimited){
            counter++;
        numberChanged.innerText = counter;
        }
    } )

    return buttonIncremente
}

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
        limiteValue.innerText = ` ${valueMax.value}`;
    });
}
// -------------------------------------------------------------------------------------------

// function qui crée les éléments 

function createAndElement(type, content, parent, classe) {
    let typeElement = document.createElement(type);

    if (content) {
        typeElement.textContent = content;
    }
    
    if (classe) {
        typeElement.className = classe;
    }
    
    if (parent) {
        parent.appendChild(typeElement);
    }
    
    return typeElement;
}

createAndElement('button', 'Chrono', sectionCard, 'btnAdd');












