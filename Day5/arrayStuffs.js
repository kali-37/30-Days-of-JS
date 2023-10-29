// Array is simple as C/c++ also we have 


const arr=[
    'Hello',
    230,
    true,
    
     {
        country:'Nepal',city:'Pokhara'
     },
    {    
        skills:['HTML','CSS','React','Python']
     }
    
]
console.log(arr);
console.log(arr.length);

let splitCountries="Nepal,Nigeria,Peru,Thailand";
console.log(splitCountries.split(',')); // create a array version of it . 
splitCountries=splitCountries.split(',');
console.log(splitCountries.join(' % ')); // join function to join from all corresponding ",", replace ',' with '%'



// Splice 

const numbers = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9) // splice function to remove and add items in the array
// as splice works splice()

console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items


