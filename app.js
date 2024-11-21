//Arrow function allow us to write shorter functions
//Arrow function only returns value by default

// Write a function that welcomes you into the application
const message = (name) => `Welcome to this application, ${name}`;//This function takes the name as a parameter and returns a welcome statement
console.log(message('Mr Fisher'));

// Arrow function that returns the sum of 3 numbers
const add = (number) => number + 3;
console.log(add(5)); //This function takes a number as input and returns the sum of that number and 3

// Arrow function that returns the modulus(%) os 2 numbers
const modules = (y, z) => y % z;
console.log (modules(20,3)); // console.log modules(remainder), returns 2
// this function takes y and z and return the remaining number after 20 divide 3 which is 2