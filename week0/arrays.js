const myArray = [1, 10, 3, 6, 'ArrayElement'];

/**
 * 1. Log 3 and 6 elements from myArray to console
 * Please, use more than on solution
 */

console.log(`3: ${myArray[2]}, ${myArray.find((el) => el === 3)}, ${myArray.filter((el) => el === 3)}, ${myArray[myArray.indexOf(3)]}, ${myArray[myArray.lastIndexOf(3)]}, ${myArray[myArray.findIndex((el) => el === 3)]}`);
console.log(`6: ${myArray[3]}, ${myArray.find((el) => el === 6)}, ${myArray.filter((el) => el === 6)}, ${myArray[myArray.indexOf(6)]}, ${myArray[myArray.lastIndexOf(6)]}, ${myArray[myArray.findIndex((el) => el === 6)]}`);

/**
 *  2. Log type of each element
 */

myArray.forEach((e) => {
    console.log(typeof e);
});

/**
 *  3. Check if all elements in array is Number
 *  Should return Boolean
 */

const isNumber = myArray.every((e) => typeof e === 'number');

console.log({
    isNumber,
});

/**
 * 4. Check if at least one element is bigger than 5
 * Should return Boolean
 */

const isBiggerThanFive = myArray.some((e) => e > 5);

console.log({
    isBiggerThanFive,
});

/**
 * 5. Create another variable that will include only elements that bigger than 5
 * Should return another Array
 */

const elementsBiggerThanFive = myArray.filter((e) => e > 5);

console.log({
    elementsBiggerThanFive,
});

/**
 * 6. Multiply numbers of Array by 2
 * Should return another Array
 */

const multiplied = myArray.map((e) => {
    if (typeof e === 'number') {
        return e * 2;
    }

    return e;
});

console.log({
    multiplied,
});

/**
 * 7. Calculate array sum
 */

const sum = myArray.reduce((acc, e) => {
    if (typeof e === 'number') {
        return acc + e;
    }

    return acc;
}, 0);

console.log({
    sum,
});

/**
 * 8. Sort array in ascending and descending order
 */

const asc = myArray.sort((a, b) => a - b);
const desc = myArray.sort((a, b) => b - a);

console.log({
    asc,
    desc,
});
