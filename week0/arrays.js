const myArray = [1, 10, 3, 6, 'ArrayElement'];

/**
 * 1. Log 3 and 6 elements from myArray to console
 * Please, use more than one solution
 */

console.log('Access elements via index:');
console.log(`3: ${myArray[2]}`);
console.log(`6: ${myArray[3]}`);

console.log('Access elements via find() method:');
console.log(`3: ${myArray.find(element => element === 3)}`);
console.log(`6: ${myArray.find(element => element === 6)}`);

/**
 *  2. Log type of each element
 */

console.log('Type of each element:');
myArray.forEach(element => {
    console.log(typeof element);
});

/**
 *  3. Check if all elements in array is Number
 *  Should return Boolean
 */

const isNumber = myArray.every(element => typeof element === "number");

console.log({
    isNumber,
});

/**
 * 4. Check if at least one element is bigger than 5
 * Should return Boolean
 */

const isBiggerThanFive = myArray.some(element => element > 5);

console.log({
    isBiggerThanFive,
});

/**
 * 5. Create another variable that will include only elements that bigger than 5
 * Should return another Array
 */

const elementsBiggerThanFive = myArray.filter(element => element > 5);

console.log({
    elementsBiggerThanFive,
});

/**
 * 6. Multiply numbers of Array by 2
 * Should return another Array
 */

const multiplied = myArray.map(element => (typeof element === 'number') ? element * 2 : element);

console.log({
    multiplied,
});

/**
 * 7. Calculate array sum
 */

const sum = myArray.reduce((sum, element) => (typeof element === 'number') ? sum + element : sum, 0);

console.log({
    sum,
});

/**
 * 8. Sort array in ascending and descending order
 */

const asc = myArray.filter(element => typeof element === 'number').sort((a, b) => a - b);
const desc = [...asc].reverse();

console.log({
    asc,
    desc,
});
