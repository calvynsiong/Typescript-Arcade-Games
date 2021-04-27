type Cards = { name: string, img: string }[]
 const RapCards: Cards = [
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
  ]


RapCards.sort(() =>  0.5-Math.random())

const grid = document.querySelector(`.grid`) as HTMLElement
const result = document.querySelector(`#result`) as HTMLElement
let cardsChosen: any[] = []
let cardsChosenID: any[] = []
let cardsWon: any[] = []

function flipcard(this:any) {
  let cardID = this.getAttribute(`data-id`)
  cardsChosen.push(RapCards[cardID].name)
  cardsChosenID.push(cardID)
  this.setAttribute(`src`, RapCards[cardID].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkforMatch, 300)
  }

}

function checkforMatch() {
  let cards = document.querySelectorAll(`img`)
  const optionOneId:any = cardsChosenID[0]
  const optionTwoId:any = cardsChosenID[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('It is a match!')
    cards[optionOneId].setAttribute(`src`, `/Images/white.png`)
    cards[optionTwoId].setAttribute(`src`, `/Images/white.png`)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute(`src`, `/Images/grey.png`)
    cards[optionTwoId].setAttribute(`src`, `/Images/grey.png`)
    alert('Try Again!')

  }
  cardsChosen = []
  cardsChosenID = []
  result.textContent = cardsWon.length.toString()
  if  (cardsWon.length === RapCards.length / 2) {
    result.textContent = `Congratulations`
  }
}

function createBoard() {
  for (let i: number|string = 0; i < RapCards.length; i++) {
    let card = document.createElement(`img`) as HTMLElement
    card.setAttribute(`src`, `/Images/grey.png`)
    card.classList.add("board")
    card.setAttribute(`data-id`, i.toString()) 
    grid.appendChild(card)
    card.addEventListener(`click`, flipcard)
  }
}

createBoard()

