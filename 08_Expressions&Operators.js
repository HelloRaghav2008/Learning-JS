"use strict";
/**
 * There are two types of expressions
 * 1. Those that have side effect (x = 7)
 * 2. Those that purely evaluate (3+4)
 *
 */

// 1. Assignment Operators
function f() {
  return null;
}
var x;
x = f(); // Assignment
x += f(); // Addition Assignment
x -= f(); // Subtraction Assignment
x *= f(); // Multiplication Assignment
x /= f(); // Division Assignment
x %= f(); // Remainder Assignment
x **= f(); // Exponential Assignment
x <<= f(); // LeftShift Assignment
x >>= f(); // RightShift Assignment
x >>>= f(); // Unsigned RighShift Assignment
x &= f(); // Bitwise AND Assignment
x ^= f(); // Bitwise XOR Assignment
x |= f(); // Bitwise OR Assignment
x &&= f(); // Logical AND Assignment
x ||= f(); // Logical OR Assignment
x ??= f(); // Nullish Coalish Assignment
