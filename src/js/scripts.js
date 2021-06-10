//* :::::::::::::::::::::::::::::::::::::: VAR
//general
let board = document.querySelector('.board');
//list
let listArr, removeListArr = []
let listTitleSetter = document.querySelector('.list-title-setter');
let listSetter = document.querySelector('.list-setter');
let addListBtn = document.querySelector('.list-setter .submit');
let addListTitle = document.querySelector('.add-list-title');
//card
let addCardArr, removeCardArr, cardSetterArr, addCardBtnArr, addCardTitleArr = [];

//* ::::::::::::::::::::::::::::::::::::: FUNCTIONS
function removeNode() {
    let toSupp = event.target.parentNode.parentNode;
    console.log(toSupp);
    toSupp.remove();
}

function toggleInput() {
    let thisSetter = event.target.nextElementSibling;
    thisSetter.classList.toggle('show');
}

function updateArrays() {
    // update lists
    listArr = Array.from(document.querySelectorAll('.list'));
    removeListArr = Array.from(document.querySelectorAll('.list-remove'));
    //update listener
    removeListArr.forEach((list) => {
        list.addEventListener('click', removeNode);
    });
    //update cards
    cardSetterArr = Array.from(document.querySelectorAll('.card-setter'));
    addCardBtnArr = Array.from(document.querySelectorAll('.card-setter .submit'));
    addCardTitleArr = Array.from(document.querySelectorAll('.add-card-title'));
    removeCardArr = Array.from(document.querySelectorAll('.card-remove'));
    // update listener
    addCardBtnArr.forEach((btn) => {
        btn.addEventListener('click', addCard);
    });
    addCardTitleArr.forEach((title) => {
        title.addEventListener('click', toggleInput);
    })
    removeCardArr.forEach((card) => {
        card.addEventListener('click', removeNode);
    })

    return listArr, removeListArr, removeCardArr, cardSetterArr, addCardArr, addCardTitleArr;
}


function addList() {
    if (listTitleSetter.value != '') {
        let div = document.createElement('div')
        div.className = 'list';
        div.innerHTML = `
              <div class="list-header">
                <h5 class="list-title">${listTitleSetter.value}</h5>
                <div class="setter-container">
                <div class="add-card-title">+ Ajouter une card</div>
                    <div class="setter card-setter">
                        <input class="title-setter card-title-setter" placeholder="Card title" type="text">
                        <button class="submit">add</button>
                    </div>
                </div>
              </div>
              <div class="card-container"></div>
              <div class="list-btn">
                <div class="btn-ico list-remove">x</div>
              </div>
          `;
        board.appendChild(div);
        //reset input
        listTitleSetter.value = '';
        listTitleSetter.blur();
        //update arrays
        updateArrays();
    }
}

function removeCard() {}

function addCard() {
    let thisEvent = event.target;
    let cardContainer = (thisEvent.parentNode.parentNode.parentNode).nextElementSibling;
    console.log(cardContainer);
    if (thisEvent.previousElementSibling.value != '') {
        let div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
        <div class="card-title">
            <p>${thisEvent.previousElementSibling.value}</p>
        </div>
        <div class="card-popup">
            <p>ceci est un popup vides</p>
        </div>
        <div class="card-btn">
            <div class="btn-ico card-remove">x</div>
        </div>
    `;
        cardContainer.appendChild(div);
        //reset input
        thisEvent.previousElementSibling.value = '';
        thisEvent.previousElementSibling.blur();
        //update arrays
        updateArrays();
    }
}
//* :::::::::::::::::::::::::::::::::::::: APP
window.onload = updateArrays();
//? ADD LIST
addListTitle.addEventListener('click', toggleInput);
addListBtn.addEventListener('click', addList);
// remove --> called from updateArrays() called from addList() 

//? ADD CARD
// dynamic because doesn't exist onload yet --> called form updateArray()

























// let listDiv = document.createElement('div');
// let headerDiv = document.createElement('div');
// let cardContainerDiv = document.createElement('div');
// let cardDiv = document.createElement('div');
// let cardTitle = document.createElement('div');
// let cardPopup = document.createElement('div');
// let cardBtn = document.createElement('div');
// let cardRemoveBtn = document.createElement('div');
// let listBtn = document.createElement('div');
// let listRemoveBtn = document.createElement('div');