"use strict";
const strings = [];
const promise = new Promise((resolve, rejectr) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
function merge(objA, objB) {
    return { ...objA, ...objB };
}
const mergedObj = merge({ name: "Neil", hobbies: ["Biking"] }, { age: 31 });
console.log(mergedObj);
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hello there"));
console.log(countAndDescribe(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Neil", age: 31 }, "name"));
class DataStorage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Hello");
textStorage.addItem("Luna");
textStorage.addItem("Neil");
textStorage.removeItem("Luna");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeBy = date;
    return courseGoal;
}
const names = ["Neil", "Luna"];
//# sourceMappingURL=app.js.map