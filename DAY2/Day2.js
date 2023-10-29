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

console.log('\t hello') // \t is used to add tab space in the string with spaces of 8 characters where 
console.log('to write a backslash we do : \\')

// Templates literals in javascript is same as python . 

let nameis="John"
let age=23
console.log(`Hello ${nameis} your age is ${age}`) // This is template literals in javascript


let string="javascript"
console.log(string.length)// returns length of the string
console.log(string.toUpperCase()) // returns string in uppercase

let country="NEPAL"
console.log(country.toLowerCase())

let stringer="javascript"
console.log(stringer[0]) // returns first character of the string


let sample="bhajangkobaag"
console.log(sample.substr(0,7)) // returns substring from index 0 to 7
console.log(sample.substring(0,7)) // returns substring from index 0 to 7

let stringerer="abcdef"
console.log(stringerer.split('')) // returns array of characters  a b c d e f
console.log(stringerer.split(', ')) // returns array of characters  a b c d e f

let forefathers =" we came here to learn javascript from fore fathers of javascript"
console.log(forefathers.includes('javascript')) // returns true if javascript is present in the string
console.log(forefathers.includes('python')) // returns false if python is not present in the string

console.log(forefathers.indexOf('javascript')) // returns index of javascript in the string
console.log(forefathers.indexOf('python')) // returns -1 if python is not present in the string




// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(forefathers.indexOf('a')) // to display last occurence of a in the string we can use lastIndexOf
console.log(forefathers.lastIndexOf('a'))


let sentence="You cannot end a sentence with because because because is a conjunction"
console.log(sentence.lastIndexOf('because'))
console.log("------------------------------------------------------------------------------")
console.log(sentence.matchAll("because")) // returns index of all occurence of because in the string



// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.



console.log(forefathers.replace('javascript','python')) // replaces javascript with python in the string
console.log(forefathers.replace(/javascript/g,'python')) // replaces all javascript with python in the string

console.log(forefathers.charAt(2)) // returns character at index 0

console.log(forefathers.indexOf('p')) // returns index of javascript in the string


console.log(forefathers.charCodeAt('2')) // returns unicode of character at index 0


let strings = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(strings.match('love')) // returns first occurence of love in the string
console.log(strings.match(/love/g)) // returns all occurence of love in the string
console.log(strings.repeat(2))


let num = '10a12' // string
console.log(typeof num) // this will print string 
let numInt = parseInt(num) // returns integer value of num as string so output is 10 and 12 is ignored because it is not a number
console.log(numInt) // 10
console.log(typeof numInt) // number




const sentences = "You cannot end a sentence with because because because is a conjunction"
const startingIndex = sentences.indexOf("b")
const endingIndex = sentences.lastIndexOf("e") + 1
const phrase = sentences.substr(startingIndex, endingIndex - startingIndex)// it actually returns substring from starting index to ending index


console.log(phrase); // "because because because"0



const sent = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const removed=(sent.match(/[^%&$@#]/g)) // returns number of special characters in the string
// and /g is used to match all occurence of special characters

// in javascript concatinating string from list of strings is done using join method
console.log(removed.join('')) // returns string without special characters


// Calculate the total annual income of the person by extracting the numbers from the following text. 

const extracter='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const extracted=extracter.match(/\d+/g)
// adding all the elements on string can be done by below method. 
console.log(parseInt(extracted[1]))
totalIncome=0
if (extracted){
    for (const number of extracted){
        totalIncome+=parseInt(number);
    }
}
console.log(totalIncome)