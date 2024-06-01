# Object

```// Creating an object
let person = {
  name: 'Tamil',
  age: 30,
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

// Accessing object properties and methods
console.log(person.name); // Output: Tamil
console.log(person.age);  // Output: 30
person.greet();           // Output: Hello, Tamil
```

<br><br>

# Array

```// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Modifying an array
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']
```

<br><br>

# Function

```// Defining a function
function add(a, b) {
  return a + b;
}

// Calling a function
let result = add(5, 3);
console.log(result); // Output: 8

// Functions can also be stored in variables
let multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 7)); // Output: 28
```
