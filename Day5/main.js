// import {countries} from './countries.js';
const countries=require('./countries.js');
const webTechs=require('./webTechs.js');

console.log('Countries:', countries);
console.log('Web Technologies:', webTechs);

// add ethopia to countries list 
countries.push('Ethiopia');
a=0

const newCountries=[]
while(a++<=countries.length/2){
    newCountries.push(countries[a]);
}

console.log(newCountries);