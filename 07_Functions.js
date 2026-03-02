/**
 * Parameters are usually passed in function by value. That means function cannot change or delete or modify the parameter and the change is usually not global.
 * But if the parameter is an object then the change is visible outside the function or globally.
 */
function square(a) {
  return a * a;
}

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  let element = square(arr[i]);
  console.log(element);
  arr[0] = 5; // The value of 0th element is changed globally as the array is an object.
}

console.log(arr[0]);

// This was the most usual way of defining a function having a name.
// But we can also create a function which doesn't have a name.

const squareExpression = function (number) {
  return number * number;
};

console.log(squareExpression(3));

const factorial = function fac(number) {
  return number < 2 ? 1 : number * fac(number - 1);
};

console.log(factorial(5));
// 1 * 2 * 3 * 4 * 5 = 120

// Functions can be hoisted that means we can use them even before they are declared.
// Remember one thing function hoisting only works for function declaration not expression.

console.log(square2(5)); // 25

function square2(n) {
  return n * n;
}
