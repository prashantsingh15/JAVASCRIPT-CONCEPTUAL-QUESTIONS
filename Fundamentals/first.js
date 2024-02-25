console.log("Hello NodeJs")

// The window object is a global object that represents the browser window containing the DOM (Document Object Model). It serves as the global context for JavaScript code running in that window.

// this - > Whenever we run console.log(this) in browser it will return window object and when we run this on Nodejs console it will return Empty Paranthesis..

// It is Because Nodejs  does not have a 'window' object like browsers do.

console.log(this)
