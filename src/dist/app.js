var User = /** @class */ (function () {
    function User(par1, par2) {
        this.firstName = par1;
        this.lastName = par2;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user1 = new User("Calvyn", "Siong");
console.log(user1.getFullName());
