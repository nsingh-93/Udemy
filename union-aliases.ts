// Union types for taking either types for the type

// Can use type aliases to make it easier to refer to union types
// can even use type aliases for things like complex objects such as:
// type User = { name: string; age: number };
// const u1: User = { name: 'Neil', age: 31 };
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text" // literal types

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
) {
  let result;

  // Some union types don't need the runtime check depending on the logic
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  //   if (resultType === "as-number") {
  //     return parseFloat(result);
  //   } else {
  //     return result.toString();
  //   }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Neil", "Singh", "as-text");
console.log(combinedNames);
