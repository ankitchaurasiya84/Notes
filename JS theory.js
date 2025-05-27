JS theory

----------------------------------------------------------
Q:1  What is the Event Loop in JavaScript?
     The Event Loop is a mechanism that enables JavaScript (which is single-threaded) to perform asynchronous operations like:
     
     fetching data from APIs,
     reading files,
     timers (setTimeout, setInterval),
     handling UI events
     ...without blocking the main thread.

----------------------------------------------------------
Q: Function curring in js?
     
 function with multiple arguments is transformed into a series of functions, each taking a single argument and returning another function until all arguments are provided.
 
 
 function data(a){
    return function(b){
        return a*b
    }
}
console.log(data(1)(2))
----------------------------------------------------------
Q:  Debouncing delays the execution of a function until after a specified time has passed since the last event. If the event is triggered again within the delay, the timer resets.
     
----------------------------------------------------------
     
Q: Throttling ensures that a function is executed at most once every specified interval, no matter how many times the event is triggered. example Google Map.
----------------------------------------------------------
     
Q: A Web API in the browser is a set of built-in tools and interfaces provided by the browser that allow JavaScript code running on a webpage to interact with the browser environment, user device, or network.
     
 ----------------------------------------------------------
     
Q: undefined → A declared variable that has not been assigned a value. occupy memory ..
   Undefined is like a placeholder till a variable is not assigned a value.
 ----------------------------------------------------------

Q:What are Hooks in React?
   Hooks are special functions introduced in React 16.8 that let you use state and other React features (like lifecycle methods) in       functional components.


localStorage: Data persists even after closing the browser/tab. Shared across all tabs of the same site.
sessionStorage: Data lasts only until the tab/window is closed. Unique per tab.


     
"Not defined" → A variable that has never been declared, causing a ReferenceError.not occupy memory 
 JS is syncronous single threaded programmoing language
JS- weakly typed language since it doesn't depend on data type declarations.

========Primitive data type=========

Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.

Data Type	Description									Example
Number		Numeric values (integer and floating-point)	42, 3.14
String		Sequence of characters	"Hello, World!", 'abc'
Boolean		Logical values: true or false				true, false
Undefined	Variable not yet assigned a value			let x; console.log(x);
Null		  Intentional absence of value				let y = null;
Symbol		Unique and immutable value					Symbol('id')
BigInt		Large integers beyond Number limits	1234567890123456789012345678901234567890n

NNSSBB=  Null Number String Symbol Boolean BigInt

Comparison by values
========Non Primitive data type=========== reference type

Data   Type. 		Description							Example	
Object	Collection of key-value Comparison		{ name: "Alice", age: 25 }
Array	Ordered collection of values				["red", "green", "blue"]	
Function	Block of code that can be called	function greet(name) { ... }	
Date	Represents date and time				new Date()	
RegExp	Regular expression for pattern matching			/abc

AFDOR
Comparison By reference
==========let vs const ve var==============

let,const are  Blocked scoped , it hoisted but not intiliased 
var funtion scoped, it hoisted but intiliased with undefined

Reassignment: Let var possible but not in const.

 Mutability
var:
Mutable: var allows the value to be changed.
let:
Mutable: let also allows the value to be changed.
const:
Immutable (for Primitive Values): const does not allow reassignment of the variable itself, 
but for objects and arrays, the contents (properties or elements) can be modified.

========when we use  let const var==========

Use var if you need function-scoped variables or for legacy code compatibility.
Use let for block-scoped variables that may need to be reassigned.
Use const for block-scoped variables that should not be reassigned, ensuring more predictable code behavior.

 ============shadowing=======================

Variable shadowing in JavaScript happens when a variable inside a block or function has the same name as a variable outside of it,
making the inner variable override or "hide" the outer one within that scope.
let name = "John"; // Outer variable

function greet() {
  let name = "Doe"; // Inner variable shadows the outer one
  console.log(name); // Outputs "Doe"
}

greet();
console.log(name); // Outputs "John"


============hoisting==========================

Hoisting in JavaScript is the process where declarations of variables and functions 
are moved to the top of their scope, allowing them to be used before they are declared in the code. 
However, only the declarations are hoisted, not the initializations, leading to undefined values or errors if not handled properly.

================Temporal Dead Zone (TDZ)============
The Temporal Dead Zone (TDZ) is the period between the creation of a variable (when its scope is entered) and its initialization (when the code assigns it a value). During this period, attempting to access the variable will result in a ReferenceError.

This applies to variables declared with let, const, and class (but not var).

=================Coercion=====================

Coercion in JavaScript is when the language automatically changes a value from one type to another. 
This happens when you use operators or functions that need a specific type, and JavaScript converts the value to fit that type. 
Coercion can happen on its own (implicit) or be done by you (explicit).
let num = 5;
let str = "10";

// Implicit coercion (JavaScript automatically converts)
let result = num + str; // '5' (number) is coerced to '5' (string)
console.log(result); // Outputs "510" (string)

// Explicit coercion
let sum = num + Number(str); // 'str' is explicitly converted to a number
console.log(sum); // Outputs 15 (number)


==========Shallow Copy of Object==============
A shallow clone copies only the top-level properties of an object. 
If any of these properties are objects themselves (nested objects or arrays), the reference to the original object is copied rather than duplicating the object.

Changes to nested objects in the original will affect the clone, and vice versa, because both the original and the clone point to the same reference for the nested objects.

========== Array Destructring =============

Array destructuring in JavaScript is a convenient way to extract values from arrays and assign them to variables in a concise manner. It was introduced in ES6 
// Basic Array Destructuring
const arr = [1, 2, 3];

// Destructuring the array
const [a, b, c] = arr;

console.log(a); // Outputs: 1
console.log(b); // Outputs: 2
console.log(c); // Outputs: 3

=========Object destructuring==========
const person = {
  name: "John",
  age: 30
};

// Renaming 'name' to 'firstName'
const { name: firstName, age } = person;

console.log(firstName); // Outputs: "John"
console.log(age);       // Outputs: 30

=============Clouser============
when inner function of varible have access of outter function varibale 

==============promises=================

a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
Promises are used to handle asynchronous operations more effectively than traditional callback functions.

Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.

// Creating a new Promise
const fetchData = new Promise((resolve, reject) => {
  let success = true; // Simulate a success or failure
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data.");
    }
  }, 2000); // Simulating an API call delay
}).then((result) => {
    console.log(result); // Outputs: "Data fetched successfully!" after 2 seconds
  })
  .catch((error) => {
    console.error(error); // Outputs: "Error fetching data." if there's an error
  });


========================DOM========================
is a programming interface for web documents.
It represents the structure of a webpage as a tree of objects, allowing developers to manipulate the content, structure, and style of a document dynamically.

=================ECMA International ==================

ECMAScript is a standardized scripting language specification that serves as the foundation for several programming languages, including JavaScript. current version ES13
1. JavaScript  
2. JScript  
3. ActionScript  
4. TypeScript  
5. CoffeeScript  
6. Dart  
7. PureScript  
8. Scala.js are languages that follows ES 

===================History of JS=============
- Developed by **Brendan Eich**  
- Year: **1995**  
- Company: **Netscape Communications Corporation**  
- Original name: **Mocha**  
- Later names: **LiveScript**, then **JavaScript**

======================Callback function=====
A callback function is a function that is passed as an argument to another function and is executed after some operation is completed. This pattern is commonly used in asynchronous programming to handle tasks that take time, such as network requests, file reading, or timers.

=============pure and impure function ===============
Pure Functions: Consistent output for the same inputs, no side effects.
Impure Functions: Variable output based on external state, may have side effects.

========= Event Delegation============
 event delegation is a technique where single event listner on parent handle events of present and future child using event bubling


===============strick Mode ; type="module"==========

============JS============

It is a lightweight, cross-platform and single-threaded programming language. 
JavaScript is an interpreted language that executes code line by line providing more flexibility.
 It is a commonly used programming language to create dynamic and interactive elements in web applications.

===============Features of JS==================

1:oops
2:First-Class Functions:
3:Asynchronous Programming: 
4:Prototype-Based Inheritance:
5:Rich Ecosystem:
6;Cross-Browser Compatibility
7:Integration with HTML and CSS 

=================Call apply Bind=======


| Feature            | `call()`                     | `apply()`                    | `bind()`                        |
|--------------------|------------------------------|------------------------------|----------------------------------|
| **Invocation**      | Invokes immediately          | Invokes immediately          | Does **not** invoke immediately |
| **Arguments**       | Passed individually          | Passed as an array           | Passed individually or pre-set  |
| **Context (`this`)**| Set by `thisArg`             | Set by `thisArg`             | Set by `thisArg`                |
| **Return Value**    | Function result              | Function result              | A **new bound** function        |
| **Use Case**        | Function invocation with a specific `this` and arguments | Function invocation with a specific `this` and array of arguments | Pre-setting `this` and/or arguments for later invocation |


================fubnction borrowing==============
Function borrowing is a concept in JavaScript where one object "borrows" a method from another object and uses it as its own. This is often done using call() or apply() to set the this value of the borrowed function.
const person1 = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person2 = {
  name: "Bob"
};

// Function borrowing using call()
person1.greet.call(person2); // Output: "Hello, my name is Bob"



Q: Can you explain the difference between var, let, and const in JavaScript?
Q: What is the event loop in JavaScript? How does it work?
Q: What is the purpose of closures in JavaScript? Can you provide an example?
Q: Explain the concept of 'this' in JavaScript. How does it behave in different contexts (e.g., inside a function, in an arrow function, in an object method)?

What is a promise in JavaScript, and how do async/await work with promises? and how to handle promise?

Q: What is callback function?
A callback function is a function that is passed into another function as an argument and is executed once the asynchronous task is completed.

Q: what is callback hell?
Callback hell happens when you have deeply nested callbacks due to multiple asynchronous operations. It makes the code harder to read, debug, and maintain. To solve this, developers often use Promises or Async/Await, both of which make asynchronous code easier to manage and more readable.

Q:babel: Converts modern JavaScript (or other languages) to an equivalent, older version of JavaScript.

Q:What is spread operator, Rest operator ,default parameter

Q: What are the falsy values in javascript?
false
0 and -0
"" (empty string)
null
undefined
NaN
Q:

const element = <h1>Hello, world!</h1>;

Redux  vs Reedux toolkit

Q: Shallow copy: it create new object butv keep reference for nested object like array object. modification of nested object will affect the copied object.

Q: Deep copy: it create a compltely independent clone, ensuring changes to tthe original object do not affcet the copiesd object.

Q: Difference between null and undefined in JS.
Q: Virtual DOM? Memory rep of Actutal DOM, Clone of DOM, use diifing aldo to compare node and optimize perfromance.
Q: SetInterval vs setTImeOut?
   Feature: 	      setTimeout()                      	 setInterval()
   Execution	     :Runs once after delay         	     Runs repeatedly at interval
   Can be stopped?:No need (executes only once)	       Use clearInterval() to stop
   Use Cases:      Delayed execution	                  Repeating tasks

    setTimeout(function, delay);  setInterval(function, interval);


Q:  Event Bubbling and event capturing: 
  Event Bubbling and Event Capturing are two phases of the DOM event propagation mechanism in JavaScript.
 They define how events travel through the DOM tree.

| Feature          | Event Capturing     | Event Bubbling                 |
| ---------------- | ------------------- | ------------------------------ |
| Direction        | Top → Target        | Target → Top                   |
| addEventListener | `useCapture = true` | `useCapture = false` (default) |
| Commonly Used    | Rarely              | Yes (default phase)            |

 

Q:  Array.isArray(num) to check if it is array or not
Q: flatMap() iterate with flat method.
Q:✅ setItem() ✅ getItem() ✅ removeItem() ✅ clear() ✅ JSON.stringify() / JSON.parse() for local storage
Q: map()+flat()
Q: arr.includes() 
Q: arr.reduce()


