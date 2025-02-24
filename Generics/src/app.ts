//************ Generic Types *********************************

const strings: Array<string> = [];
// names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, rejectr) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

//************ Generic Functions ****************************

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: "Neil" }, { age: 31 }));

// const mergedObj = merge({ name: "Neil" }, { age: 31 });
// Can't access the properties from this
// can type cast with as to get the properties back but is cumbersome
// mergedObj.name;

// Type constraints on what is passed in for the generic
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB } as T & U;
  // Below was causing an error for me so spread was used at first
  // until the generics were extending the object in the declaration
  // return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Neil", hobbies: ["Biking"] }, { age: 31 });
console.log(mergedObj);
console.log(mergedObj.age);

// Another Generic Function
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";

  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("Hello there"));
console.log(countAndDescribe(["Sports", "Cooking"]));

// keyof Constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Neil", age: 31 }, "name"));

//************ Generic Classes **************************
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(this: DataStorage<T>, item: T) {
    this.data.push(item);
  }

  removeItem(this: DataStorage<T>, item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(this: DataStorage<T>) {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Hello");
textStorage.addItem("Luna");
textStorage.addItem("Neil");
textStorage.removeItem("Luna");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const neilObj = { name: "Neil" };
// objStorage.addItem(neilObj);
// objStorage.addItem({ name: "Luna" });

// objStorage.removeItem(neilObj);

// console.log(objStorage.getItems());

//************ Generic Utilities ******************

interface CourseGoal {
  title: string;
  description: string;
  completeBy: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeBy = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Neil", "Luna"];
// names.push("Max");
// names.pop();
