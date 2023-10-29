// check age

let age=prompt("Enter your age ");
if (age>18){
    console.log("you are old enough to drive ");
}
else{
    console.log("Wait till age covers 18")
}



// Check even number 

let inp=prompt("Enter a number ");
if (inp %2 ==0){
    console.log("Even")
}
else{
    console.log("It's Odd ");
}

// Exercise Level 2 
let scores=prompt("Enter your Score ");
switch(true){ // after switch we can use true or false or any expression
    case scores>80 && scores<100:
        console.log("A");
        break;
    case scores>70 && scores<80:
        console.log("B");
        break;
    case scores>60 && scores<70:
        console.log("C");
        break;
}


let day=prompt("What is the Day today ? ");
day=day.toLowerCase();
if (day=='saturday'){
    console.log("It's weekend");
}
else{
    console.log("It's a working day ");
}

// Days in month 

function daysInMonth(month,year){
    const leapyear=(year%4==0 && year%100!=0 )|| year %400==0;
    if(month===1 && leapyear){
        return 29;
    }
    if (month===1){
        return 28;
    }
    else if(month===0 || month===2 || month ===4 || month === 6 || month ===7 || month ===9 || month ===11){
        return 31;
    }
    else{
        return 30;
    }
}

const month =2; 
const year =2024;
const dayinmonth=daysInMonth(month,year);
console.log(` The n.b of days on provided month ${month} and year ${year} is ${dayinmonth} \n`);
