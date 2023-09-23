// Unlike other programming languages , javascript have strict rule of primitive data types and object data types.
// Primitive data types are immutable and object data types are mutable.
// Primitive data types are stored in stack and object data types are stored in heap.

// Primitive data types are : String, Number, Boolean, Null, Undefined, Symbol
// Object data types are : Object, Array, Function, Date, RegExp, Error

let a=23
let word="javascript"
word[0]="Y"   // This will not change the value of word[0] to Y as string is immutable
a=235 // This will change the value of a to 235 as number is mutable
console.log(a)
console.log(word)


let arr=[1,2,3,4,5] // This is an array and array is mutable
let brr=[1,2,3,4,5]
console.log(arr==brr) // prints false as both are different objects in memory so it dosen't work as other programming languages


// In javascript MATH Object is used to perform mathematical operations

console.log(Math.PI) // prints PI value
console.log(Math.E) // prints E value
console.log(Math.round(2.4)) // rounds the value to nearest integer
console.log(Math.ceil(2.4)) // rounds the value to nearest integer greater than the value
console.log(Math.floor(2.4)) // rounds the value to nearest integer smaller than the value
console.log(Math.abs(-2.4)) // returns absolute value of the number
console.log(Math.pow(2,3)) // returns 2 to the power 3
console.log(Math.sqrt(4)) // returns square root of the number
console.log(Math.min(2,3,4,5,6,7,8,9,1)) // returns minimum value from the list of numbers
console.log(Math.max(2,3,4,5,6,7,8,9,1)) // returns maximum value from the list of numbers
console.log(Math.random()) // returns random number between 0 and 1
console.log(Math.floor(Math.random()*10)) // returns random number between 0 and 10 
console.log(Math.floor(Math.random()*10)+1) // returns random number between 1 and 10

// We do also have log in javascript MATH. 

console.log(Math.log(2)) // returns log of 2 . 

// we can concatenate strings in javascript using + operator

let firstname="JOHN"
let lastname="DOE"
let space=" " 
console.log(firstname+space+lastname) // concatenation of strings

