/* Boolean data: data that can be either true or false; 
answers to yes or no questions; answer is used to 
determine a further question: Boolean operators: used 
to vetermine if a value is equal to another value, 
 greater than  or less than another value, or if 
 multiple conditions are true together; 
 these conditions will result in true or false, 
 and this is called Boolean logic; when we combine 
 Boolean logic with at least one Boolean operator, 
 we get a Boolean expression and that expression 
 evaluates to another Boolean expression either 
 true or false*/


 /* 5 == 4   false
 5 == 5   true 
== equality operation (type does not matter, i.e. 3 == 3 is true)
=== strictly equal (type matters)
 > greater than
 < less than
 >= greater than or equal to
 <= less than or equal to */


 /* && and  if both sides are true: 5 > 4 && 4 < 10 then it's true, 
 if one is false, the whole Boolean expression 
 reverts to false
 
 || or  if one or the other is true the whole expression is true 
 4 > 10 || 1 == 1; this is a true expression because at least 
 one is true*/ 

 /* Boolean values are important because they help us make 
 decisions based on whether something is true or false */

 /* if and else conditions: determines the action to be 
 taken based on whether something is true or false */
 
let ageRequiredToDrive = 16;
let currentAge = 12; 
let canPersonDrive = currentAge >= ageRequiredToDrive; 

console.log(canPersonDrive);

if (canPersonDrive) {
    console.log("This person can drive");
    } else {
        console.log("This person cannot drive legally"); 
    }
/* if the expression is true, the first block of code will print; 
if the expression is false, the second block of code will print */

/* sometimes there are more than two options in a decision; 
the first else statement will print if it is true; if it is false, 
it will skip to the next else statement until it gets to a true 
statement; if none are true the final else statement is the default 
code that will run*/

let costOfEggs = 3.50; 
let numberOfDozensOfEggsToPurchase = 0;
if (costOfEggs > 3) {
    numberOfDozensOfEggsToPurchase = 1;
} else if (costOfEggs > 2) {
    numberOfDozensOfEggsToPurchase = 2;
} else if (costOfEggs > 1) {
    numberOfDozensOfEggsToPurchase = 3;
} else {
  numberOfDozensOfEggsToPurchase = 4;
}
console.log("I will buy" + numberOfDozensOfEggsToPurchase + "dozen eggs.");

/* it is also possible to use the "switch" statement when evaluating 
a variable with multiple different code blocks that could be executed 
based on the value of the variable */ 

let grade = "B";

switch (grade) {
    case "A":
        console.log("90-100");
        break; /* as soon as we hit the matching case, we exit out*/
    case "B":
        console.log("80-89");
        break;
    case 'C':
        console.log("70-79");
        break;
    case 'D':
        console.log("60-69");
        break;
    default:
        console.log("0-59");
}

let firstName = "Tim"; 

if (firstName == "Sam") {
    console.log("Hello, Sam!");
} else {
    console.log("Hey," + firstName);
}

/* when we have multiple conditions in any possible flow, 
it's possible to nest them */

let a = 5; 
let b = 6; 

if (a == 5) {
    console.log("a is 5 and b is 6");
} /*the statement is true but it's written poorly and should
be flattened: take the "if" statements and combine them using 
the loginal "and" order*/

if (a == 5 && b == 6) {
    console.log("a is 5 and b is 6");
}