/**
 * 1. Write a funcion that accepts your firstName and lastName
 * Should return 'I'm firstName lastName'
 */

function sayWho(firstName, lastName) {
    return `I'm ${firstName} ${lastName}`;
}

console.log(sayWho('vasya', 'pupkin'));

/**
 * 2. Write a function that accepts numbers and return their sum
 * No limits for arguments count
 */

function countSum(...numbers) {
    return numbers.reduce((prevNumber, currentNumber) => prevNumber + currentNumber, 0);
}

console.log(countSum(4, 5, 23));
console.log(countSum(10, 50, 212, 300, 22));
console.log(countSum(1, 2));

/**
 * 3. Write a function that count number of letters in provided string
 */

function countLetters(string, letter) {
    return string.split('').map(i => i === letter).filter(Boolean).length
}

console.log(countLetters('Node developer', 'd'));

/**
 *  4. Write function that will return random integer in range that you provided
 */

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(0, 10));
console.log(getRandom(90, 200));