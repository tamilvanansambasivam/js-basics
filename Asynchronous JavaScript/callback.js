function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function logGreeting() {
  console.log("Greeting function was called.");
}

greet("Tamil", logGreeting);
