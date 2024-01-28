const { type } = require("os");

class Person{
    constructor(firstName,lastName){
        console.log(this)
        this.firstName=firstName
        this.lastName=lastName
    }
    display() {
       console.log(this.firstName) 
       return;
    }
}
const person1=new Person('Ram', 'pyre')
person1.display()

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`

    const define_new_obj = JSON.parse(usersText, (key, value) => {
        let new_value = typeof value=="string" ? "hawa":value;
        return new_value;
    });;
console.log(define_new_obj)

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }
console.log(JSON.parse(usersText,undefined,16))   // Indentation will be of 16 space size. 
const stringified= JSON.stringify(user,['firstName'],4)
console.log("strignify ",stringified);
