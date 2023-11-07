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




