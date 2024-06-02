// Define a function named `greet` that takes two parameters:
// `name` (a string) and `callback` (a function).
function greet(name, callback) {
  // Log a greeting message to the console.
  console.log("Hello, " + name);
  // Call the `callback` function.
  callback();
}

// Define a function named `logGreeting` that takes no parameters.
function logGreeting() {
  // Log a message to the console indicating that the greeting function was called.
  console.log("Greeting function was called.");
}

// Call the `greet` function with "Tamil" as the name and `logGreeting` as the callback function.
greet("Tamil", logGreeting);
