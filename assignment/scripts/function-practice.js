console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to retdurn 'Hello World!'
function sayHello() {
  console.log('hello and name. ', helloName());
}
function helloName(name) {
  return 'Hello' + "," + ' '+ 'Asante!';
}
// Remember to call the function to test
console.log('hello and name. ', helloName());




// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName() {
  return "Tom Brady wants to say hi Asante!' ";
}

console.log('He heard you have his 600th TD football;', helloName());




// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log('These are the numbered added', addNumbers(9, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( numOne, numTwo, numThree ){
return numOne * numTwo * numThree;
}
console.log('These are the numbers multiplied', multiplyThree(3, 3, 3));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log("The number is:", number )
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
}
}
console.log("Is this positive?", isPositive(-39));

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let numArry = [1, 2, 3]
function getLast( array ){
  if (array.length == 0)
  {
    return undefined;
  }
  else {
      return array[array.length - 1];
  }

}
console.log('Test the last item in the array', getLast([numArry]))

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (const x of array){
    if ( x === value)
  return true;
  }
  return false;
}
let array = ['trees', 'Leaves', 'wood', 'Roots']
console.log('Here to test the true value of the function array', find('wood', array)); // Here there is a loop that test to see if the function is true
console.log('Seeing if I can get a false test of the function in a Array', find('moneyball', array)); // Here there is a loop that test to see if the function is false

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if ( letter === string[0]){
    return true;
  }
    return false;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'Cherrys') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'Lemons') );

// 9. Function to return the sum of all numbers in an array
function sum(arr) {
        let sum = 0; // initialize sum

        // Iterate through all elements
        // and add them to sum
        for (let i = 0; i < arr.length; i++)
            sum += arr[i];

        return sum;
    }
//Driver code--------------------------------------------------------
let arr = [12, 3, 4, 15];
    document.write("Sum of given array is " + sum(arr));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let newArray = [0,1,3,5,-8,-10,6,-20];
function returnPositiveNumbers( array ) {
  let positiveArray = [];
  for ( let i in array ) {
    if ( array[i] > 0 ) {
      positiveArray.push(array[i]);

    }
  }
  if (positiveArray.length > 0 ) {
    return positiveArray;
  } else {
    return;

}

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test
