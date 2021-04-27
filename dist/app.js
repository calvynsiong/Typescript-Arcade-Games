"use strict";
class User {
    constructor(par1, par2) {
        this.firstName = par1;
        this.lastName = par2;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user1 = new User("Calvyn", "Siong");
console.log(user1.getFullName());
//# sourceMappingURL=app.js.map