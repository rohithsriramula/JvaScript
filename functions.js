// a Java Script is ablock of code designed to perform a particulsr task and is executed when "something "calls it.
// this is afunction calle "sayMyName"
// and it has 0 arguments
// does: it logs out your name  to the console

function sayMyName(){
    console.log('rohith')
    
}
// sayMyName()

// this is a function called "syMyName2"
//  it has one argument "name"
// does: it logs out your name  to the console

function sayMyName2(name){
    console.log(name)
}
// sayMyName2('friendu')

function greeting(name){
    //greet = 'hi ' + name + ' ,Nice to meet you!'
    //template literals
   greet = `hi ${name} , Nice to meet you!` 
    console.log(greet)
}
// greeting('rambo')
function sum(a,b){
    // return --a return staetement stops the execution of a function and returns a value
    return a+b
}
// num1 = sum(2,5)
// console.log(num1)

function calculateTotalFood(food,tip){
    const tipPercentage= tip/100
    const tipAmount = food * tipPercentage
    const total =sum(food,tipAmount)
    return total
}
console.log(calculateTotalFood(380,10))

//ES6
// arrow funstions =>
// arrow funstion with explict return
const sumArrow = (a,b) => {
    return a+b
}
// arrow function with implict return
// imp--for implict return, remove curly braces
const sumArrow2 = (a,b) => a + b
console.log(sumArrow2(100,300))
