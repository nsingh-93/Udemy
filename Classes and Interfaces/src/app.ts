// type AddFn = (a: number, b: number) => number;
// using the function type is more common than
// the interface function type
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  // Optional property, functions can also be optional
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// Comma separated list for multiple interfaces
class Person implements Greetable {
  name?: string;
  age = 31;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

// Can use the class or interface type for the variable
// since the class implements the interface
let user1: Greetable;

user1 = new Person();

user1.greet("Hello there, I am");
console.log(user1);

console.log(add(2, 6));
