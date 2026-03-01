/**
 * There are total 8 data types:
 * 1. Boolean
 * 2. null
 * 3. undefined : a top level property whose value is undefined.
 * 4. Number : An integer or floating point number.
 * 5. BigInt : An integer with arbitrary precision.
 * 6. String : A sequence of characters
 * 7. Symbol : A data type whose instances are unique and immutable.
 * 8. Object
 * JavaScript is dynamically typed so we don't even need to specify data type and also later on we can change the data type if we want.
 * In expressions involving numbers and + operator with a string JavaScript autmatically converts number into string but with any other operator this doesn't happen.
 */

// Converting strings to numbers
// parseInt() -> returns whole number
var a = "32";
parseInt(a, 10); // 32
parseInt(a, 2); // 100000
// Here 10 & 2 are radix numbers that means in which system we want to parse our number.

// We can also retrieve a number from a string is + operator

// Literals
// In array literals always use a trailing comma at the end of multi-line array ->
let myArray = [1, 2, 3, 4];
// now here if I add one more element at the end that will increase only one line of git diffs but no trailing comma will lead to more git diffs.
