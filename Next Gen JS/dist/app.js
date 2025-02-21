"use strict";
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    firstName: "Neil",
    age: 31,
};
const copiedPerson = { ...person };
console.log(copiedPerson);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 3, 6, 87);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log(person, userName, age);
//# sourceMappingURL=app.js.map