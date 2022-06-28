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
