"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    name;
    age = 31;
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user1;
user1 = new Person();
user1.greet("Hello there, I am");
console.log(user1);
console.log(add(2, 6));
//# sourceMappingURL=app.js.map