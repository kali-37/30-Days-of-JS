//  So , as we see javascript have similar functionalities as , c/c++ booleans functionatilities. 

// Let's see ternary operators in javascript 

let isRaining =true

// Ternary operators as per c/c++ lile. 
isRaining ? console.log('you need a rain coat.') : console.log('No need  for a rain coat')


let number=3

number>0 ? console.log('number is positive  '+number ):console.log('number is negative'+ number)


// alert('Welocome to 30 days of Javascript ')

// Prompt takes two arguments , but second argument is optional 
// prompt('required text', 'optional text')

// const agree=confirm ('Are you sure you want to delete ?')
// console.log(agree) // returns true if ok is pressed and false if cancel is pressed.

console.log(4!='4') // returns false as it only checks the value not the type of the variable.
let a = 4   // number   
let b='4'   // string
console.log(a==b) // returns true as it only checks the value not the type of the variable.

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true



const now = new Date();
const second=now.getSeconds();
const date=now.getDate();
const day=now.getDay();
const minute=now.getMinutes();
const year=now.getFullYear();
const hour = now.getHours();

console.log(year+'/'+date+'/'+day+'       '+hour+':'+minute+':'+second)
console.log(`${date}/${day}/${year} ${hour}:${minute}`) // 4/1/2020 0:56


let firstname='Subash'
let lastname='Rimal'

if (firstname>lastname){
    a=firstname;
    b=lastname;
}
else{
    a=lastname;
    b=firstname;
}
console.log(`${a} is greater than ${b}`);
console.log(`${a} is greater than ${b}`)