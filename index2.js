
  /* DRY method: don't repeat yourself; code should nevere be duplicated 
because it creates more places to have to change something if there 
is a problem; Loops are designed for code that will repeat until a 
condition is met */

/*Loops contain parentheses with specific conditions and a body 
denoted by curly braces and will excute over and over until 
the condition in parentheses is false */

 /* "For loops": have 3 sections inside the parentheses separated 
  by two semicolons; the first section is where you declare 
  a variable; the most common variable in a for loop is an "i"; 
  the second section is the Boolean expression that determines 
  if the loop performs an iteration; the third section is the 
  post-iteration: what happens after the loop completes an iteration.*/
  
/*For loops are good when you know how many times you need 
to iterate (loop through your code*/

/* for (let i = 0 (a regular variable); i < 10 (as long as 
"i" is less than 10 we will performa an iteration); i++) {console.log(i);}
  let i = 0; runs; then i < 10; runs; then 
    console.log(i); runs; then we jump up to i++ 
    which runs the post iteration where we increment "i")*/

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }    
  
  /* this loop above will iterate as long as the value of "i" 
  is less than 10; everything in the braces is the body of the 
  loop; the iteration performs until it reaches the point 
  that "i<10" is false*/

  console.log("whatever is next");

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0)
    console.log(i);
} /*even numbers only are printed;"i" is a common variable 
for loops meaning "index"; % means "mod" */

/* we use for loops when we know how many times we want 
to iterate, or if there's an array we want to iterate 
over each element in it*/

let names = ["Sam", "Tom", "Hillary"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

/*While loops has less setup than "for loops", and good when  
you have to do something until a condition is met, 
but you have less knowledge of how many iterations are needed */

/* the following is an infinite loop because a is always 0: 
let a = 0; 
while (a < 10) {
console.log(a);
}  If the variable never changes, the condition never changes;
 See below changes to above */ 

 let a = 110; 

 while (a < 10) {
 console.log(a);
 a++
 } 

/* Do while loops are like "while loops", but they always 
iterate at least once and we check the condition at the end
Do While loop: This loop functions much like a While loop, 
except that a While loop has the possibility of never running 
if its Boolean expression evaluates to false the first time, 
and a Do While loop will always execute at least once since 
the expression is at the end. Let's take a look at an example*/

do {
  console.log(a);
} while (a < 10)

/* "For in loop" and "for of loop" each perform an iteration for 
each element or item in an array (an array is a list of values)*/

for (i in names) {
  console.log(i);
}

/* "For of loops": instead of looping through the index, it loops
through the object (the value) itself*/

for (name of names) {
  console.log(name);
}
