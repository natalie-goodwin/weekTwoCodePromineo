/* The original source for most data is user input; 
based on the data that is input, programs will 
execute different paths of logic and make decisions 
based on the rules we program.  */

/* "window.prompt()" function  -- This function takes 
a String as an argument and displays a popup box 
displaying the String and an input text box to 
receive user input. The function then returns the 
user input so it can be stored in a variable. this is a 
temporary method that will not be used in more advanced 
applications, but will help us interact with the user 
at this stage in our learning*/ 

/* var name = window.prompt("What is your name?");
window.alert(`Welcome, ${name}`);  */

/* The above code will prompt a user for a username 
and a password and if the username and password match
`samy123` and `12345` relatively, the user will be 
welcomed. If not, the user will see a message saying 
their credentials are not correct. Notice how we don't
 have to use `window.prompt()` or `window.alert()` - 
 that is because most browsers allow us to ommit the 
 window object and call it's methods/functions 
 directly.*/

/* let username = prompt("username:");
let password = prompt("password");

if (username == "samy123" && password == "12345") {
    alert("Welcome back," + username);
} else {
    alert("Incorrect username or password.");
} */


 /* With the above example, we have to refresh the 
 browser each time to run it again. So, if a user 
 puts in the incorrect credentials, they see the 
 message and that's it until they refresh the page 
 and try again. To have a better user experience, 
 we would most likely want to prompt the user for 
 their credentials again after a failed login attempt.
 We can do this with a loop.*/

let loggedIn = false;

while(!loggedIn) {
    let username = prompt("Username:");
    let password = prompt("Password");

    if (username == "samy123" && password == "12345") {
        alert("Welcome back," + username);
        loggedIn = true;
    } else {
    alert("Incorrect username or password.");
    }
}


/* In the above code, we use a Boolean variable as a 
flag to determine whether the user is logged in or 
not. If the user enters the wrong credentials, 
nothing happens to the loggedIn variable, so it 
remains false causing the loop to iterate again and 
again until the user enters the correct credentials, 
at which point we update the loggedIn variable to 
true, which will cause the loop to stop iterating. 
We could also add a login attempt count that would 
enable the user to only enter the incorrect 
credentials a certain number of times before 
displaying a message like "You are locked out" 
and ending the loop. See if you can figure out how 
to implement this feature*/