// 1
// 1 2
// 1 2 3 . . . .

console.log();
console.log();
console.log("Pattern One ...");
console.log();
for (i = 1; i <= 5; i++) {
  let c = 0;
  for (j = 1; j <= i; j++) {
    c = c + j + " ";
  }
  console.log(c);
}

console.log();
console.log("...............");
console.log();

// -----------------

// 1
// 2 3
// 4 5 6
// 7 8 9 10 . . .

console.log("Pattern Two ...");
console.log();
var k = 1;
for (i = 1; i <= 5; i++) {
  let c = "";
  for (j = 1; j <= i; j++) {
    c = c + k + " ";
    k++;
  }
  console.log(c);
}

console.log();
console.log("...............");
console.log();

// -----------------

// * * * * *
// * * * *
// * * *
// * *
// *

console.log("Pattern Three ...");
console.log();
for (i = 1; i <= 5; i++) {
  let c = "";
  for (j = 5; j >= i; j--) {
    c = c+ "* ";
  }
  console.log(c);
}

console.log();
console.log("...............");
console.log();
