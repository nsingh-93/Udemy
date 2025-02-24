type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {};

// Intersection type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Neil",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

// Union Types
type Combinable = string | number;
type Numeric = number | boolean;

// Intersection Types
type Universal = Combinable & Numeric;

// Function Overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  // Type guard when using union types
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result = add(1, 5);
const result = add("Neil", " Singh"); // as string;
result.split(" ");
console.log(result);

// Optional Chaining
const fetchedUserData = {
  id: "u1",
  name: "Neil",
  job: { title: "CEO", description: "My company" },
};

// In JS, this would be the way to keep runtime errors from happening
// if a property does not exist in an object or etc.
// console.log(fetchedUserData.job && fetchedUserData.job.title);

console.log(fetchedUserData?.job?.title);

// Nulish Coalescing
const userInput = null;
// const storedData = userInput || "DEFAULT";  Fails if there is a falsey value like empty string
const storedData = userInput ?? "DEFAULT";

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  // Another way to type guard on objects
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  // Another way to type guard with union classes
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }

  vehicle.drive();
}

useVehicle(v1);
useVehicle(v2);

// A common property that is set in the interface
// can be used to use a switch statement to type guard
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

// Cannot use instanceof since we're using interfaces
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// Type Casting
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// Type casting here with keyword as makes it non null
const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement;
userInputElement.value = "Hi there!";

// Can also do it like
// const userInputElement = document.getElementById("user-input");
// (userInputElement as HTMLInputElement).value = "Hi there!";

// Index Properties
interface ErrorContainer {
  // { email: "Not a valid email", userName: "Must start with character" }
  // id: string;
  // Can't do id: number because of the indexed type
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  userName: "Must start with capital character",
};

console.log(errorBag);
