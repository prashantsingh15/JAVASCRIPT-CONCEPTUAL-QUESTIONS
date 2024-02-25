console.log("Hello NodeJs")

// The window object is a global object that represents the browser window containing the DOM (Document Object Model). It serves as the global context for JavaScript code running in that window.

// this - > Whenever we run console.log(this) in browser it will return window object and when we run this on Nodejs console it will return Empty Paranthesis..

// It is Because Nodejs  does not have a 'window' object like browsers do.

console.log(this)


/*
Data Types in JavaScript:
JavaScript supports various data types, including primitives like numbers, strings, booleans, null, undefined, and objects like arrays and functions. Each data type has its own characteristics and methods for storage and retrieval.

Memory Management:
JavaScript engines, like V8 in Chrome or SpiderMonkey in Firefox, manage memory allocation and deallocation. When you create variables or objects in JavaScript, memory is allocated to store their values. When these variables or objects are no longer needed, memory is deallocated through a process called garbage collection.

Variables and Scope:
Variables declared with var, let, or const keywords are stored in memory according to their scope (global or local) and lifetime (when they are created and when they go out of scope). Scopes in JavaScript are typically function-based, meaning variables declared within a function are only accessible within that function unless they are explicitly returned or declared in a wider scope.

Primitive Values:
Primitive values like numbers, strings, and booleans are stored directly in memory locations known as the stack. When you assign a primitive value to a variable, the actual value is copied into the variable's memory location.

Reference Values:
Objects, arrays, functions, and other non-primitive values are stored in memory locations known as the heap. When you assign a reference value to a variable, the variable stores a reference (memory address) to the location in memory where the actual value is stored.

Data Fetching:
When you access a variable or property, JavaScript retrieves the value stored in memory. For primitive values, the value is directly retrieved from the stack. For reference values, the reference is used to locate the value in the heap, and then the value is retrieved.

Passing by Value vs. Passing by Reference:
In JavaScript, primitive values are passed by value, meaning a copy of the value is passed to functions or assigned to other variables. Reference values are passed by reference, meaning the reference to the value's memory location is passed, allowing changes to the value to affect all references to it.

*/
