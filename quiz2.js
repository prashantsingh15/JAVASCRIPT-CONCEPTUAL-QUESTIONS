arr1 = [1,2,3]
arr2 = [1,2,3]

if (arr1==arr2) {
    console.log("Same")
}

else {
    console.log("Not Same")


}

//  The '==' operator is not comparing the object equalty it is comparing the equality of reference , not the actual content of the array.  

// The arr1 and arr2 variables refer to two different array objects with the same values. Even though the content of the arrays is the same, their references are different because they are two distinct objects in memory.

// Therefore, the condition arr1 == arr2 evaluates to false, and the code will print "Not Same" to the console.



//  IF WE  WANT TO CHECK THE CONTENT OF TWO ARRAY IS THE SAME WE SHOULD USE '==='(STRICT EQUALITY) OPERATOR TO COMPARE THE INDIVIDUAL ELEMENT .  

arr01 = [1,2,3];
arr02 = [1,2,3];

if (arr01.toString() === arr02.toString()) {
    console.log("Same.....")
}

else {
    console.log("Not Same")
}