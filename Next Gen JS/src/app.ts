// const userName = "Neil";
// userName = "Neil Singh";   const can't be changed

// let age = 31;
// age = 30;

// let and const are different than var because of scope
// they add block scope so they are available in the block
// they are defined in or any lower blocks

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => {
//   return a + b;
// };

// Can also write as
// const add = (a: number, b: number) => a + b;
// ;
// since it is only a single expresion and has the implicit return

// console.log(add(5, 10));

// const printOutput = (output: string | number) => console.log(output);

// printOutput(add(2, 5));
// printOutput(add(5));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// Spread operator to pull all elements out of array
// it makes them into a list of individual objects
activeHobbies.push(...hobbies);

console.log(activeHobbies);
// Can also do this in the array itself
// const activeHobbies = ["Hiking", ...hobbies];

const person = {
  firstName: "Neil",
  age: 31,
};

const copiedPerson = { ...person };

console.log(copiedPerson);

// Rest parameter in the arguments to allow a variable amount of
// parameters to be passed in as an array
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 3, 6, 87);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
// Can do the above with array destructring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

// We pull items out of the object by key name
// they have to be the property names in the object
// but colon can be used to give it a new name
const { firstName: userName, age } = person;

console.log(person, userName, age);