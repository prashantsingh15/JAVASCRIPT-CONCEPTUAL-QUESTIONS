let isPass = false
console.log(isPass.randomKey)
new Boolean(isPass).randomKey


// When we attempt to access a property on a variable that doesn't exist, it returns undefined. This behavior occurs because isPass is a boolean variable, and it doesn't have a property named randomKey. Therefore, isPass.randomKey will evaluate to undefined.


//  When we use the 'new Boolean()' constructor to create a Boolean object, it creates an object wrapper around the boolean value. This  wrapper object dosen't inherit any additional properties or methods beyond those defined for all objects In JavaScript..

// So when we try to access 'randomKey' property on 'new Boolean(isPass)', it dosen't have any such property defined , and thus it will return 'undefined', just like accessing a property on any other object that dosen't exist.