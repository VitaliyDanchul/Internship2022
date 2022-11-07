/**
 * 1. Write a funcion that accepts your firstName and lastName
 * Should return 'I'm firstName lastName'
 */

function sayWho(firstName, lastName) {
    return `I'm ${firstName} ${lastName}`;
}

console.log(sayWho("Serhii","Hrynevych"));

/**
 * 2. Write a function that accepts numbers and returns their sum
 * No limits for arguments count
 */

function countSum(...numbers) {
    return numbers.reduce((sum, element) => sum + element, 0);
}

console.log(countSum(4, 5, 23));
console.log(countSum(10, 50, 212, 300, 22));
console.log(countSum(1, 2));

/**
 * 3. Write a function that count number of letters in provided string
 */

function countLetters(string, letter) {
    return string.split(letter).length - 1;
}

console.log(countLetters('Node developer', 'd'));

/**
 *  4. Write function that will return random integer in range that you provided
 */

function getRandom(start, end) {
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (end - start) + start);
}

console.log(getRandom(0, 10));
console.log(getRandom(90, 200));
