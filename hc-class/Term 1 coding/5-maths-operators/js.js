var a = true;
var b = true;
var c = false;
var d = false;

// And (&&)
// if at least one value is false, result will be false
console.log(a&&b)  
// true and false = true
console.log(a&&c)
// true and true = false
console.log(c&&d)
// false and false = false

// Or (||)
// If at least one value is true, result will be true
console.log(a||b) 
// true and true = true
console.log(a||c)
// true and false = true
console.log(c||d)
// false and false = false