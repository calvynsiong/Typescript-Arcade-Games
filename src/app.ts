const someElement = document.querySelector(`.foo`) as HTMLInputElement

someElement.addEventListener(`click`, e => {
  const target = e.target as HTMLElement 
  console.log("event", target)
})