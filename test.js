"use strict";
const months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`
];
const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const dates = date.getDate();
console.log(date.getFullYear());
document.body.innerHTML = date;
