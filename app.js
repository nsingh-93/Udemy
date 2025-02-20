// Unknown type because we don't know what the user will put in
var userInput;
// Unknown can store any type without errors
var userName;
userInput = 32;
userInput = "Test string";
// Unknowns can't be assigned to explicitly typed variables, but any can
// userName = userInput;
// Need type check to assign value of unknown type to value of fixed type
if (typeof userInput === "string") {
    userName = userInput;
}
// Never type is used for functions that throw an error
// and never return a value or are an infinite loop
// void is asssumed for these return types, but never is clearer
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateError("An error occurred", 500);
