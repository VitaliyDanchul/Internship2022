const myArray = [1, 10, 3, 6, 'ArrayElement'];

/**
 * 1. Log 3 and 6 elements from myArray  to console
 * Please, use more than on solution
 */

console.log(`3: ${myArray[2]}`);
console.log(`6: ${myArray[3]}`);
myArray.forEach(i => i === 3 || i === 6 ? console.log(`${i}: ${i}`) : null);

/**
 *  2. Log type of each element
 */

myArray.forEach((i) => {
    console.log(typeof i);
});

/**
 *  3. Check if all elements in array is Number
 *  Should return Boolean
 */

const isNumber = myArray.every(Number);

console.log({
    isNumber,
});

/**
 * 4. Check if at least one element is bigger than 5
 * Should return Boolean
 */

const isBiggerThanFive = myArray.some((i) => i > 5)

console.log({
    isBiggerThanFive,
});

/**
 * 5. Create another variable that will include only elements that bigger than 5
 * Should return another Array
 */

const elementsBiggerThanFive = myArray.filter(i => i > 5);

console.log({
    elementsBiggerThanFive,
});

myArray.pop()

/**
 * 6. Multiply numbers of Array by 2
 * Should return another Array
 */

const multiplied = myArray.map(i => i * 2);

console.log({
    multiplied,
});

/**
 * 7. Calculate array sum
 */

const sum = myArray.reduce((prev, current) => prev + current, 0);

console.log({
    sum,
});

/**
 * 8. Sort array in ascending and descending order
 */

const asc = [...myArray].sort();
const desc = [...myArray].reverse();
 
console.log({
    asc,
    desc,
});