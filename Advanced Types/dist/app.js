"use strict";
const e1 = {
    name: "Neil",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log(e1);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Neil", " Singh");
result.split(" ");
console.log(result);
const fetchedUserData = {
    id: "u1",
    name: "Neil",
    job: { title: "CEO", description: "My company" },
};
console.log(fetchedUserData?.job?.title);
const userInput = null;
const storedData = userInput ?? "DEFAULT";
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
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
    loadCargo(amount) {
        console.log("Loading cargo ... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    vehicle.drive();
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there!";
const errorBag = {
    email: "Not a valid email",
    userName: "Must start with capital character",
};
console.log(errorBag);
//# sourceMappingURL=app.js.map