// Question 1
// Mutating array methods are methods that modify the original array in place. Non-mutating array methods, also known as immutable array methods, do not modify the original array.
// Example of mutating array methods are; pop(), push(), reverse(), shift(), splice()
// Example of immutable array methods are: slice(), concat(), map(), filter(), reduce()

// Question 2
let language = ['C#', 'Javascript', 'Ruby', 'PHP', 'Python'];
// Question 2.1
language.push("Kotlin");
// Question 2.2
language.splice(3, 0, 'Java');
// Question 2.3
language.shift()
// Question 2.4
language.unshift('Scala', 'Swift')
// Question 2.5
language.splice(5, 1, 'Go', 'Rust')


// Question 3
[ 'apple', 'mango', 'orange' ]

// Question 4

function maximumNumber(number){
    return Math.max.apply(null, number);
}
let value = [1, 4, 7, 10, 17];
// console.log(maximumNumber(value))

// Question 5
function valTimesIndex(number){
    let result = 0;
    let newNumber = number.map(number => number * result++);
    return newNumber;
}
let number = [1, 4, 7, 10, 17, 2, 5, 4, 4];
console.log(valTimesIndex(number))