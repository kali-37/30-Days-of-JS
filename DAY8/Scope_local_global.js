//scope.js


// window scope ..
a = 'JavaScript' ;// declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible
letsLearnScope();


// Global Scope ...

// let a='JavaScript'
// let b=10 
function letsLearnScipe(){
    console.log(a,b,"inside scope ")
}
letsLearnScipe();
const dog={};
console.log(dog);
dog.name="Thade";
dog.legs=4;
dog.color="Brown";
dog.bark_value=function(){
    return "woof woof";
}
console.log(`Name : ${dog.name} \n Legs : ${dog.legs} \n Color: ${dog.color}  \n BarkValue : ${dog.bark_value()} `)
dog.breed="Golden retriver";
dog.getDogInfo=function(){
    return `Name : ${dog.name} \n Legs : ${dog.legs} \n Color: ${dog.color}  \n BarkValue : ${dog.bark_value()}`; 
};  
console.log(dog.getDogInfo());




// _------------------------------------------------------------------------------------------_


const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }



//   Find the person who has many skills in the users object.
let greatest=0;
let answer=null;
for (const elems in  users ){ // 
   if( users[elems].skills.length > greatest){
        greatest=users[elems].skills.length;
        answer=elems;
   } 
}
console.log(` the answer is ${answer}`)





// 2. Count logged in users, count users having greater than equal to 50 points from the following object. 

let count=0;
let greatest_50=[""];
for (const elems in users){
   if ( users[elems].points>=50){
        greatest_50.push(elems) 
    }
    if(users[elems].isLoggedIn){
        count++;
    }
}

console.log(` count : ${count} \n Greatest_50 -> list : ${greatest_50}`);


// Find people who are MERN stack developer from the users object

users["Subash"]={};

console.log(users);


// Exercise Level 3. 

const personalAccount={
    firstName:"Subash",
    lastName:"Rimal",
    Incomes:{
    totalIncome:"Zero",
    totalExpense:"-minus",
    accountInfo:"rimalsubash77@gmail.com",
    addIncome:"30K",
    addExpence:"20k",
    accountBalance:"120k",
    }}


    const userss = [
        {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'08/01/2020 9:00 AM',
            isLoggedIn: false
        },
        {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'08/01/2020 9:30 AM',
            isLoggedIn: true
        },
        {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'08/01/2020 9:45 AM',
            isLoggedIn: true
        },
        {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'08/01/2020 9:50 AM',
            isLoggedIn: false
        },
        {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'08/01/2020 10:00 AM',
            isLoggedIn: false
        }
        ];
    
        const products = [
      {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
          { userId: 'fg12cy', rate: 5 },
          { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
      },
      {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
      },
      {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
      }
    ]



//function SignUp(){
//}


//function SignUp(){
//}
const SignUp=(username)=>{
    if (!( username in userss)){
        userss[UserInput]={};
        console.log("NEW USERS CREATED>> ");
    }
    else{
       console.log("User already existed ");
    }
};

const prompt =require('prompt');
const rl=prompt.createInterface({
    input: process.stdin,
    output: process.stdout    
});



//const UserInput=prompt("Please Enter your credentials to Signup ");
const UserInput=require("Please Enter your credentials to Signup ");
SignUp(UserInput);



function likeProduct(Product,nameUser){
    if (nameUser in products[Product].likes) {
        products[Product].pop(nameUser);
    }
    else{
        products[Product].push(nameUser);
    }
}

likeProduc('eedfcf',"fg12cy");