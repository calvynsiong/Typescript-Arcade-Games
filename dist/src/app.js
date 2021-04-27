"use strict";
let Input;
let Name;
Input = `5`;
// if (typeof Input == `string`) {
//   Name = Input
// }
// console.log(Input, Name)
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
let result = generateError(`That's tough`, 699999);
console.log('====================================');
console.log(result);
console.log('====================================');
//# sourceMappingURL=app.js.map