// Suboptimal because we're assigning types to code that TS can infer
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Neil",
//   age: 31,
// };

const person = {
  name: "Neil",
  age: 31,
};

console.log(person);
console.log(person.name);


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
