// Suboptimal because we're assigning types to code that TS can infer
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: "Neil",
//   age: 31,
//   hobbies: ["Sports", "Cooking"],
// };

// Need to explicitly define object structure since tuple type
// couldn't be inferred from the object structure
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Neil",
//   age: 31,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], // tuple
// };

// push() is an exception to tuples' restrictions
// person.role.push("admin");

// Now gives error because type cannot be changed from string to number
// person.role[1] = 10;

// Doesn't work because it has to be 2 items only
// person.role = [0, "admin", "extra"];


enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Neil",
  age: 31,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// any[] to support any type in the array
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

/********************* NESTED OBJECT **********************************
// Having a nested object like
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
// would make the object type as such
{
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    }
}
*********************************************************************/
