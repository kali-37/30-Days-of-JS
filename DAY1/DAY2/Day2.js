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
console.log(arr==brr)