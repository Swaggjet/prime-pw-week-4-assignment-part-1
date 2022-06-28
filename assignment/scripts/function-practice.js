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
  return "Hey The sun is getting closer Asante!' ";
}

console.log('NASA says the sky is falling;', helloName());


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log('The amount is', addNumbers(9, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( numOne, numTwo, numThree ){
return numOne * numTwo * numThree;
}
console.log('These are multiplied', multiplyThree(3, 3, 3));


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
console.log( 'isPositive - true', isPositive(3) );
console.log( 'isPositive - false', isPositive(0) );
console.log( 'isPositive - false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

let numArry = [1, 2, 3]
function getLast( array ){
  if (array.length === 0)
  {
    return undefined;
  }
  else {
      return array[array.length - 1];
  }

}
console.log('Get last item in the array', getLast([numArry]))

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

