
// Function that receives a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    return "I am a named function!";
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return () => "I am an anonymous function!";
}
