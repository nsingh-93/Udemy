// Use `npm start` in cmd to run live development
// server to update continuously for changes

// TS has static types on during development, not during runtime

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // Non TS way to make sure function can't be called with incorrect types
  // if (typeof n1 !== "number" || typeof n2 !== "number")
  // {
  //     throw new Error("Incorrect input");
  // }

  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1 = 3; // numbers are the same so 3.0 is the same here
let number2: number; 
// Can set the type of the variable to make sure it is only set as that type later on
// number2 = "2.4" <- Would not technically cause error because type is not forced at first
number2 = 2.4;
const printResult = true;
// Type gets inferred because the value is set at the same time
let resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
// const result = add(number1, number2, printResult);
// console.log(result);
