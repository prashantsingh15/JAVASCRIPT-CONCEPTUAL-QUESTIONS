// Question : - Make The length 0

//   <------------First Method------------>
// When we use let and set the empty array it will not show any error and when we set const 

let arr = [1,3,5,6] 
arr = []
console.log(arr)


// When we use const to declare a variable , we are stating that the identifier should
// always reference the same value . Trying to reassign a new value to a varaible declared with const will result in a Type Error .
// When we set the const then it will show error TypeError: Assignment to constant variable.

const arr1 = [1,2,3,4] 
arr1 = []
console.log(arr1)

// Method to resolve the Const error by using <--------- arr.splice ----------->

const arr3 = [1,3,5,6]
arr.splice(0, arr.length);
console.log(arr);