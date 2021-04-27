interface IUser {
  getFullName(): string
}

class User implements IUser {
  firstName: string;
  lastName: string;
  constructor(par1: string, par2: string) {
    this.firstName = par1;
    this.lastName = par2;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

const user1 = new User("Calvyn", "Siong")
console.log(user1.getFullName())