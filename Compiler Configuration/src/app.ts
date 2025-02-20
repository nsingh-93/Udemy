// Can run console in watch mode by using `tsc app.ts --watch`
// `tsc --init` can be used to initialize a project (only needs to happen once)
// Then `tsc --watch` can be used to watch all of the project files
// Finally can just use `tsc` to compile everything
const userName = "Neil Singh";

let age: number;
age = 31;

console.log(userName);

const button = document.querySelector("button");

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome"));
}
