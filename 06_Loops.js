/**
 * Loops are used to do work repetetively
 * for loop
 * do while
 * while
 * labeled
 * break
 * continue
 * for...in
 * for...of
 */

/* for loop
for (initialization; condition; afterthought) {
  statement;
} 
*/

// do ... while
/*
do {
  statement;
} while (condition);
*/

// while
/*
while (condition) {
  statement;
}
*/

// for...in
/* 
for (variable in object) {
  statement;
}
*/

// Recommended approach for Arrays is to use for loop with a numeric index when iterating over arrays.

for (let index = 0; index < 10; index++) {
  console.log(`Outer loop value ${index}`);
  for (let index2 = 0; index2 < 10; index2++) {
    console.log(`Inner value loop ${index2}`);
  }
}
