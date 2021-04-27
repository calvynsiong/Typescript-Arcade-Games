"use strict";
const RapCards = [
    {
        name: `Dababy`,
        img: `/Images/dababy.png`
    },
    {
        name: `Polo`,
        img: `/Images/polog.jpg`,
    },
    {
        name: `Gunna`,
        img: `/Images/gunna.jpg`
    },
    {
        name: `LilBaby`,
        img: `/Images/lilBaby.jpg`
    },
    {
        name: `RoddyRich`,
        img: `/Images/roddy-rich.jpg`
    },
    {
        name: `RodWave`,
        img: `/Images/rodwave.jpg`
    },
    {
        name: `Dababy`,
        img: `/Images/dababy.png`
    },
    {
        name: `Polo`,
        img: `/Images/polog.jpg`,
    },
    {
        name: `Gunna`,
        img: `/Images/gunna.jpg`
    },
    {
        name: `LilBaby`,
        img: `/Images/lilBaby.jpg`
    },
    {
        name: `RoddyRich`,
        img: `/Images/roddy-rich.jpg`
    },
    {
        name: `RodWave`,
        img: `/Images/rodwave.jpg`
    }
];
// Sorts rap cards randomly
RapCards.sort(() => 0.5 - Math.random());
// Initialize grid container and results heading
const grid = document.querySelector(`.grid`);
const result = document.querySelector(`#result`);
// Initialize name of chosen cards, id of chosen cards and name of cards won
let cardsChosen = [];
let cardsChosenID = [];
let cardsWon = [];
function checkforMatch() {
    let cards = document.querySelectorAll(`img`);
    const optionOneId = cardsChosenID[0];
    const optionTwoId = cardsChosenID[1];
    // If the card names are the same + they do have the same IDs
    if (cardsChosen[0] === cardsChosen[1] && cardsChosenID[0] !== cardsChosenID[1]) {
        alert('It is a match!');
        cards[optionOneId].setAttribute(`src`, `/Images/white.png`);
        cards[optionTwoId].setAttribute(`src`, `/Images/white.png`);
        cardsWon.push(cardsChosen);
    }
    else {
        cards[optionOneId].setAttribute(`src`, `/Images/grey.png`);
        cards[optionTwoId].setAttribute(`src`, `/Images/grey.png`);
        alert('Try Again!');
    }
    cardsChosen = [];
    cardsChosenID = [];
    result.textContent = cardsWon.length.toString();
    if (cardsWon.length === RapCards.length / 2) {
        result.textContent = `Congratulations`;
    }
}
function createBoard() {
    // Adds 12 blank images
    for (let index = 0; index < RapCards.length; index++) {
        let card = document.createElement(`img`);
        card.setAttribute(`src`, `/Images/grey.png`);
        card.classList.add("board", `${index.toString()}`);
        card.setAttribute(`data-id`, index.toString());
        grid.appendChild(card);
        card.addEventListener(`click`, function () {
            // Initialize callback function for flipping card
            // Changes image based on initialized object
            // Obtains card ID and pushes the name of the card to cardsChosen, while pushing the id onto the cardsChosenID 
            // Calls checkforMatch when 2 images are opened
            let cardID = this.getAttribute(`data-id`);
            cardsChosen.push(RapCards[cardID].name);
            cardsChosenID.push(cardID);
            this.setAttribute(`src`, RapCards[cardID].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkforMatch, 500);
            }
        });
    }
}
createBoard();
//# sourceMappingURL=app.js.map