"use strict";
const someElement = document.querySelector(`.foo`);
someElement.addEventListener(`click`, e => {
    const target = e.target;
    console.log("event", target);
});
//# sourceMappingURL=app.js.map