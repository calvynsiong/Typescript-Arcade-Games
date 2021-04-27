var RapCards = [
    {
        name: "Dababy",
        img: "/Images/dababy.png"
    },
    {
        name: "Polo",
        img: "/Images/polog.jpg"
    },
    {
        name: "Gunna",
        img: "/Images/gunna.jpg"
    },
    {
        name: "LilBaby",
        img: "/Images/lilBaby.jpg"
    },
    {
        name: "RoddyRich",
        img: "/Images/roddy-rich.jpg"
    },
    {
        name: "RodWave",
        img: "/Images/rodwave.jpg"
    },
    {
        name: "Dababy",
        img: "/Images/dababy.png"
    },
    {
        name: "Polo",
        img: "/Images/polog.jpg"
    },
    {
        name: "Gunna",
        img: "/Images/gunna.jpg"
    },
    {
        name: "LilBaby",
        img: "/Images/lilBaby.jpg"
    },
    {
        name: "RoddyRich",
        img: "/Images/roddy-rich.jpg"
    },
    {
        name: "RodWave",
        img: "/Images/rodwave.jpg"
    }
];
RapCards.sort(function () { return 0.5 - Math.random(); });
var grid = document.querySelector(".grid");
var result = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenID = [];
var cardsWon = [];
function flipcard() {
    var cardID = this.getAttribute("data-id");
    cardsChosen.push(RapCards[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute("src", RapCards[cardID].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkforMatch, 300);
    }
}
function checkforMatch() {
    var cards = document.querySelectorAll("img");
    var optionOneId = cardsChosenID[0];
    var optionTwoId = cardsChosenID[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('It is a match!');
        cards[optionOneId].setAttribute("src", "/Images/white.png");
        cards[optionTwoId].setAttribute("src", "/Images/white.png");
        cardsWon.push(cardsChosen);
    }
    else {
        cards[optionOneId].setAttribute("src", "/Images/grey.png");
        cards[optionTwoId].setAttribute("src", "/Images/grey.png");
        alert('Try Again!');
    }
    cardsChosen = [];
    cardsChosenID = [];
    result.textContent = cardsWon.length.toString();
    if (cardsWon.length === RapCards.length / 2) {
        result.textContent = "Congratulations";
    }
}
function createBoard() {
    for (var i = 0; i < RapCards.length; i++) {
        var card = document.createElement("img");
        card.setAttribute("src", "/Images/grey.png");
        card.classList.add("board");
        card.setAttribute("data-id", i.toString());
        grid.appendChild(card);
        card.addEventListener("click", flipcard);
    }
}
createBoard();
