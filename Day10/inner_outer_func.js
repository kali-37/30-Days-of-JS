//Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
//It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions.
//Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.



// Day 19

function personAccount(Name, Last_name,incomed,expensesr){
    let firstName=Name;
    let lastName=Last_name;
    let incomes=incomed;
    let expenses=expensesr; 
    function totalIncome(){
        return incomes;        
    }
    function totalExpense(){
        return incomes-expenses;
        
    }
    function accountInfo(){
       return "Name : ",firstName,"\n lastName: ",lastName,"\n incomes ",incomes , "\n expenses",expenses; 
    }
    // addIncome, addExpense and accountBalance 
    function addIncome(provided){
        incomes+=provided 
    }
    function addExpense(expenses){
        expenses+=expenses 
    }
    return{
        totalExpense:totalExpense(),
        accountInfo:accountInfo(),
        addIncome:addIncome(),
        addExpense:addExpense()

    }
}
const inner_funcs=personAccount("ram","gurung",500,10);
console.log(inner_funcs.totalExpense);
console.log(inner_funcs.accountInfo);
console.log(inner_funcs.addIncome(100));
console.log(inner_funcs.addExpense(10));


// day 20