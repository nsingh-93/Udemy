// Return type of function is inferred but can be explicit
function add(n1: number, n2: number) {
  // function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(12, 45));

// void return functions give undefined when used in other functions
// console.log(printResult(add(12, 45)));

// undefined is also a type as it is a value
// let someValue: undefined;

// Setting variable to Function type
// let combineValues: Function;

// Explicit function type with parameters and return type
let combineValues: (a: number, b: number) => number;

combineValues = add;
// Using type any for functions can cause issues
// this causes runtime errors because 5 is not the add function
// combineValues = 5;

// No compile error but incorrect run when
// not explicity defined with params and return
// combineValues = printResult;

console.log(combineValues(8, 7));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

addAndHandle(20, 40, printResult);
