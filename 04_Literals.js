/**
 * Integer Literals
 * Literals support Decimal, hexadecimal, octal, binary.
 * Octal :- A leading 00 or 0O or 0o
 * Hexadecimal :- A leading 0x or 0X
 * Binary :- A leading 0b or 0B
 */

var a = 0b111111;
parseInt(a, 10);
console.log(a);

/**
 * A floating point literal can have:
 * An unsigned decimal integer,
 * A decimal point,
 * A fraction
 * An exponenet. (It is e or E followed by an signed integer)
 */
// The syntax for exponent is
// [digits].[digits][(E|e)[(+|-)]digits]
var b = 3.1e12;
console.log(b);
