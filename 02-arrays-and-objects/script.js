// let x;

// const arr = [28, 38, 44, 29, 109];

// // push() - Push a value on to the end of the array
// arr.push(100);

// // pop() - Take the last value off
// arr.pop();

// // unshift() - Add a value to the beginning of the array
// arr.unshift(99);

// // shift() - Remove first value
// arr.shift();

// // reverse() - Reverse an array
// arr.reverse();

// // includes() - Check to see if something is in the array
// x = arr.includes(445);

// // indexOf() - Return the index of the first match
// x = arr.indexOf(28);

// // Return array as a string
// x = arr.toString();
// x = arr.join();

// // slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
// x = arr.slice(1, 4);

// // splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// x = arr.splice(1, 4);

// // Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// x = arr.splice(4, 1);

// // Chaining methods - Some methods can be chained depending on the return value.
// x = arr.slice(1, 4).reverse().toString().charAt(0);

// console.log(x);

// //Bai 2.2

let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting arrays

// Nesting berries inside of fruits
fruits.push(berries);

// Now we can access 'blueberry' with the following
x = fruits[3][1];

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Concatenate arrays
x = fruits.concat(berries);

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// Static methods of Array object

// isArray() - Check is is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from('12345');

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);