// Functions without parameter 

function square(){
    let numOne=10;
    let numTwo=20;
    let sum=numOne+numTwo;
    console.log(sum);
}
square();
function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addTwoNumbers())


// functions returning the value 

function printFullName (){
    let fullName='Subaszh';
    return fullName
}
console.log(printFullName())

// function with two parameters ..
function functionName(parm1,parm2){
    // code goes here  

    return parm1+parm2;
}
console.log(functionName(2,34));

// sum of array elements using arrow function 

const sumAllNums=(...args) =>{
    

    console.log(args);
}