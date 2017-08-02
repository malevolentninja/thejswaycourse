// CHAPTER ONE PART TWO: Play with Variables

/*
Variable is an information storage area. 
Three main properties: 
1. name - identifies it (upper and lower case, numbers(not the first part) and characters ($ or _)
2. value - data stored in the variable
3. type - determines the role and actions avaiable to the variable
no need for variable type to be explicitly defined
*/

/* 
Declaring a variable , memory reserved to store it. 
The programme can then read and write data in this area by manipulating the variable
*/ 
let a;
console.log(a);
// returns undefined = no value
/* 
let followed by the variable name creates a variable. 
var is also used like let 
*/

// Assign values to variables
/* = assignment operator to store a value into the variable 
this can be changed. */

let a;
a = 3.14;
console.log(a);
// returns 3.14

// Declare a value and assign a value
let a = 3.14;
console.log(a);

// Declaring a constant variable
/* 
constant variable is one which won't ever change during th rest of the program
the sate of constant can ve enforced by using const instead of let
*/
const a = 3.14; // The value of a cannot be modified
a = 6.28; // Impossible!
// returns Attempting to override 'a' which is constant

// Increment a number variable
/*
+= increment operator increases the value with the number desired
++ incrememnt operator which increases the value 
*/
let b = 0; // b contains 0
b += 1; // b contains 1
b++;  // b contains 2
console.log(b); // Shows 2
