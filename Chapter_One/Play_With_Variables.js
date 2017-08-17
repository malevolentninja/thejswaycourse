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

// Variable scope
/*
scope of a variable is part of the programme where the variable is visible and usable. 
variables declared with let or const are block-scoped
block-scoped refers to visibility limited to the block they are declared (sub block if any)
code block is a portion of a program delimited by a pair of opening and closing braces.
*/

let nb1 = 0;
{
   nb1 = 1; // OK : nb1 is declared in the parent block
   const nb2 = 0;
}
console.log(nb1); //OK : nb1 is declared in the current block 
console.log(nb2); // Error! nb2 is not visible here

// Expressions
/* 
Expression is a piece of code producing a value
created by combining variables, values and operators
Every expression has a value and thus a type
evaluation calculates an expressions value, during this the variables aer replaced by their values
*/

// 3 is an expression whose value is 3 
const c = 3;
// c is an expression whose value is the value of c (3 here)
let d = c;
// (d + 1) an expressino whose value is d's + 1 (4 here)
d = d + 1; // d now contains the value of 4
console.log(d); // Show 4
/* 
Operator priority inside an expression is the same as in math. 
However, an expression can integrate parenthesis that modify these priorities.
*/
let e = 3 + 2 * 4; // e contains 11 (3 + 8)
e = (3 + 2) * 4; // e contains 20 (5 *4)

/*
It is possible to include expressions in a string by using backticks (`) to delimit the string. 
Such a string is called a template literal. 
Inside a template literal, expressions are identified by the ${expression} syntax.
This is often used to create strings containing the values of some variables.
*/

const country = "France";
console.log(`I live in ${country}`); // Show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // Show "3 + 7 = 10"

// Type conversions
/*
An expression's evaluation can result in type conversions. 
implicit conversions happen automatically without the programmer's intervention. 
 + operator between a string and a number causes the concatenation of the two values into a string result.
*/

const f = 100;
// Show "Variable f contains the value 100"
console.log("Variable f contains the value " + f);

/*
JavaScript is extremely tolerant in terms of type conversion. 
However, sometimes conversion isn't possible. 
If a number fails to convert, you'll get the result NaN (Not a Number).
*/
const g = "five" * 2;
console.log(g); // Show NaN

/* Sometimes you'll wish to convert the value of another type. 
This is called explicit conversion. 
Number() command converts the value between the parenthesis to a number.
String() command converts the value between the parenthesis to a string.
*/

const h = "5";
console.log(h + 1); // Concatenation: show the string "51"
const i = Number("5");
console.log(i + 1); // Numerical addition: show the number 6

// User interactions

// Entering informaiton  - start to exchange information with user

const name = prompt("Enter your first name:"); // diaglogue box will pop up asking for first name
alert('Hello, ${name}');
// click ok and return with a personalised greeting of Hello,{name}
/* the name variable is stored as a string
alert() triggers a display containing the result of the concatenation 
this contains the string "Hello, " + name variable
*/

// Display information
/* console.log() and alert() used to display information 
console.log() does not stop programme execution and can display several comma-seperated values at once
*/
const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3); // returns "36.9 37.6 37.1"

// Entering a number 
/* 
prompt() always returns a string value
Number() converts a string into a number
*/
const input = prompt("Enter a number:"); // input's type is string
const nb = Number(input); // nb's type is number
// both operations can be combined into one line
const nb = Number(prompt("Enter a number:")); // nb's type is number
/* user input is directly converted into a number value by Number() 
this is stored in nb variable
*/

// Variable naming 

// naming variables makes code easier to read
// 1. letter form
const a = 5.5;
const b = 3.14;
const c = 2 * a * b;
console.log(c);
// 2. words
const radius = 5.5;
const pi = 3.14;
const perimeter = 2 * pi * radius;
console.log(perimeter);
// same function, just version two is easier to understand

// CODING TIME!
/* Improved Hello 
Write a program that asks the user for his first name and his last name.
The program then displays them in one sentence.
*/
var fName = prompt("What is your firstname?");
var sName = prompt("What is your surname?");

alert(`Hello, ${fName} ${sName}`);


/* Final Values
Observe the following program 
predict the final values of its variables
Execute to checkpredicitons
*/
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

/* VAT calculation
Write a program that asks the user for a raw price. 
After that, it calculates the corresponding final price using a VAT rate of 20.6%.
*/
var vatRate = 20.6;
var input = Number(prompt('Please enter the raw price £ '));
var nb = Number(input); // converts string type to number
var total = input/100 * vatRate;
console.log(total);


/* From Celsius to Fahrenheit degrees
Write a program that asks for a temperature in Celsius degrees, 
then displays it in Fahrenheit degrees.
The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
*/
var input = Number(prompt('enter the temperature in celsius');
var cTemp = Number(input);                
var fahrenheit = (cTemp * 9/5) + 32));
console.log(fahrenheit);


/* Variable swapping
Observe the following
Add necessary code to swap the variables number1 and number2 
Several valid ways
use more than two variables to solve it 
*/

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

console.log(number1); // Should show 3
console.log(number2); // Should show 5
