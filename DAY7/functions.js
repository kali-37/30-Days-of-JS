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
    let t=0;
    for (const elems of  args){
        t=t+elems;
    }
    console.log(t);
}

sumAllNums(1,2,3,4,5);


// function anomynous 

const anomynousfunc=function(){
    console.log(
        'I am anonymous functin and my value stored in anonymous FUN'
    )
}
anomynousfunc();
// Expression FUnction ..

const squares=function(n){
    return n*n;
}
console.log(squares(2));

// function with explicitly return 

const printFullNamer=(first,last)=>`${first},${last}`
console.log(printFullNamer('Asabeneh','Yetayeh'));



const arrowBMIcalc=(weight,height)=>{
    const bmi=weight/(height*height);
    console.log("BMI IS ",`${bmi}`)
    if (bmi<18.5){
        return " UNDERWEIGHT";
    }
    else if(bmi>18.5 && bmi<24.9){
            return "NormalWeight";
    }
    else if(bmi>=25 && bmi<=29.9){
        return "OverWeight";
    }
    else{
        return " you are OBESE fatty shit";
    }
    }

console.log(arrowBMIcalc(60,4.6));



//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array


function reverseCountries(countries){
    const copy=[...countries];
    copy.reverse;
    return copy;
}

const countries=['America','zait','Nepal','India','China'];
console.log(reverseCountries(countries));
