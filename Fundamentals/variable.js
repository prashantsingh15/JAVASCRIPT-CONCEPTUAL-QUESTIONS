// What is Variable ? 

//  Variable is a container where we store something .

//  Values and DataTypes

// Primitive Data Types :-

// How to stores Number In Primitive Data Types .

// Numbers : 2, 3, 4 , 4.5, 24

//  - String : "Hello", or "Prashant" 

// Boolean : true, false

// Null : Null means nothing 

// - Undefined : We have a here but we not assign any value for 'a' .  

let a;


// Non Primitive Data Types 

// - Array

let name1 = "Prashant Singh"
let name2 = "Sushant Singh"
let name3 = "Shaanta"

let names = ["Prashant", "Shaanta", "Sushant Singh",2, 3, false, true]

console.log(names)

// - Object: {}


// Keywords - let and const

// let means if you want to change the value in future then let will allow you to change that..
// But Const Don't allow that it will Through TypeError....


let myName = "Prashant"

myName = "Prashant Singh"
console.log(myName)


// Const

// const name = "Prashant"

// name = "Prashant Singh"
// console.log(name)

// name = "Prashant Singh"
// TypeError: Assignment to constant variable.

// Look wehenver we try to make change in const like that it will gonna throw the error...

// Assigment Operator

let highScore = 300
console.log(highScore)

let coursePrice = 2750
console.log(coursePrice)

coursePrice = 2700
console.log(coursePrice)
 

let userName = "Prashant Singh"


let coursePrice1  = 200
let gstOnCourses = 36
let finalPurchaseAmount = coursePrice1 + gstOnCourses
console.log("Final Amount to be Paid: ", finalPurchaseAmount)


let dsaCourse = 500
console.log("Final price of DSA Course: ", dsaCourse * gstOnCourses)

// Modulus
console.log("Answer is: ",  5 % 2)

// Divide 
console.log("Answer2 is: ", 5 / 2)

// Power

console.log("Answer3 is: ", 3 ** 2)



// Comparision ('==', '>', '<', '>=', '<=')

let prashantSinghAge = 18
let ruleOnVoting = 19
console.log(prashantSinghAge == ruleOnVoting)
console.log(prashantSinghAge > ruleOnVoting)
console.log(prashantSinghAge < ruleOnVoting)
console.log(prashantSinghAge <= ruleOnVoting)
console.log(prashantSinghAge >= ruleOnVoting)

