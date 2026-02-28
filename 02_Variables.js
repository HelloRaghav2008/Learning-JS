/** JavaScript has 3 types of variable declarations:
 * 1. var : Declares a variable, optionally initialiazing to a value. Variables declared with var are only local to function. var is by-default initialized 'undefined'. Also var gets hoisted meaning it can be referred from anywhere even before getting declared. In hoisting only var declaration and default initialization(undefined) is hoisted.
 * 2. let : Declares a block-scoped, local, optionally initialiazing to a value.
 * 3. const : Declares a block-scoped, read-only named constant.
 * The names of variables is called identifiers.
 *
 */
var a = 20;
console.log(a);

let b = 30;
console.log(b);

const c = 40;
console.log(c);
