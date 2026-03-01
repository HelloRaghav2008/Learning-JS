/**
 * Control Flow Statements
 * if
 * for
 * while
 * Conditional Statements
 * if...else
 * switch
 * Falsy values evaluate to false
 * false
 * undefined
 * null
 * 0
 * NaN
 * empty string("")
 * All other evaluate to true
 */

/**
 * Exception handling statements
 * throw :- throws exceptions
 * try..catch :- handle them
 */

function throwError() {
  throw new Error("Hello World");
}
try {
  throwError();
} catch (e) {
  console.log(e);
}
