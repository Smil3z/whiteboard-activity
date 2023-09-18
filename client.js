console.log('Hello Group');


// Problem One, Reverse a String

function reverseString (str){
    let result = "";
    for(let i = str. length-1; i >= 0; i--){
    result += str[i];
    }
    return result;
}
console. log (reverseString("javascript"))
// ......................................................................................



// Problem Two, Mod Operator + FizzBuzz

function fizzBuzz(number) {
    if (number % 15 === 0) {
        return 'FizzBuzz';
    }
    else if (number % 3 === 0) {
        return 'Fizz';
    }
    else if (number % 5 === 0) {
        return 'Buzz';
    }
    else {
        return number;
    }
}
console.log(fizzBuzz(300), fizzBuzz(303), fizzBuzz(305), fizzBuzz(202));
// ......................................................................................



// Problem three, Leap years
function isLeapYear(year){
    if (year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    else if (year % 4 === 0) {
        return true;
    }
    else{
        return false;
    }
}
console.log('Leap Year', isLeapYear(2004));
// ......................................................................................



// Problem four, BLT

/*let bothBreadPieces = true
let bacon = true;
let lettuce = true;
let tomato = true;*/

const isBlt = ingredients => {
    const bothBreadPieces = (ingredients[0] === 'bread' &&
    ingredients[ingredients.length - 1] === 'bread');

    let bacon = false;
    let lettuce = false;
    let tomato = false;

    for (let item of ingredients) {
        if (item == 'bacon'){
            bacon = true;
        }
        else if (item == 'lettuce') {
            lettuce = true;
        }
        else if (item == 'tomato') {
            tomato = true;
        }
}
console.log(bothBreadPieces, bacon, lettuce, tomato);
return(bothBreadPieces && bacon && lettuce && tomato);
}

console.log('Checking BLT', isBlt(['bread', 'tomato', 'bacon', 'lettuce', 'bread']));

// ......................................................................................





// Problem five, Move odd numbers back
function moveNumbers(word){
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = [];
let odds = [];
for(numbers of numberArray){
    if(numbers % 2 === 0){
        evens.push(numbers);
    }
    else{
        odds.push(numbers);
    }
}
if(word == 'odds' ){
return odds.concat(evens);
}
else{
    return evens.concat(odds);
}
}
console.log('even number array should be first', moveNumbers('odds'));
// ......................................................................................



// Problem six, Word counter
function wordCounter(array, string){ 
    let stringCount = 0;
    for (let item of array) {
        if (item.toLowerCase() === string.toLowerCase()) {
            stringCount++;
        }
    }
    return stringCount;
}
console.log('Should equal 3:', wordCounter(['one', 'one', 'two', 'One'], 'one'));

// ......................................................................................


//Peroblem seven, Add up the numbers

function addUpNumbers(number){
    let numberSum = 0;
    while (number > 0) {
        numberSum += number;
        number--;
    }
    return numberSum;
}
console.log('Should equal 55:', addUpNumbers(10));
