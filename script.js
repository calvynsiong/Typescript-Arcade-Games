const number = 1;
let number2 = number;
number2 = 7;
console.log(`The first valuue is ${number} and the second is ${number2}`);

let person = { name: `Job` };
let person2 = {...person};
person2.name = `Susie`
console.log(`The first is ${person.name} and the second is ${person2.name}`)