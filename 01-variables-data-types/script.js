// // // // // Log number
// // // // console.log(100);

// // // // // Log string
// // // // console.log('Hello World');

// // // // // Log multiple values
// // // // console.log(20, 'Hello', true);

// // // // // Log a variable
// // // // const x = 100;
// // // // console.log(x);

// // // // // Console error & warning
// // // // console.error('Alert');
// // // // console.warn('Warning');

// // // // // Log object as table
// // // // console.table({ name: 'Brad', email: 'brad@gmail.com' });

// // // // // Group console commands
// // // // console.group('simple');
// // // // console.log(x);
// // // // console.error('Alert');
// // // // console.warn('Warning');
// // // // console.groupEnd();

// // // // // Add CSS to logs
// // // // const styles = 'padding: 10px; background-color: white; color: green';
// // // // console.log('%cHello World', styles);

// // // // //Bai 1.2

// // // // // This is a single line of code

// // // // /*
// // // // Multi-line comment
// // // // console.log(100);

// // // // console.log('Hello World');

// // // // console.log(20, 'Hello', true);
// // // // */

// // // // //Bai 1.3

// // // // // Ways to declare a variable
// // // // // `var`, `let`, & `const`

// // // // let firstName = 'John';
// // // // const lastName = 'Doe';
// // // // let age = 30;

// // // // console.log(age);

// // // // // Naming Conventions
// // // // // - Only letters, numbers, underscores and dollar signs
// // // // // - Can't start with a number

// // // // // Multi-Word Formatting
// // // // // firstName = camelCase
// // // // // first_name = underscore
// // // // // FirstName = PascalCase
// // // // // firstname = lowercase

// // // // // We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
// // // // age = 31;
// // // // console.log(age);

// // // // // With let, we can declare a value without assigning a value
// // // // let score;
// // // // score = 1;
// // // // console.log(score);

// // // // if (true) {
// // // //   score = score + 1;
// // // // }

// // // // console.log(score);

// // // // const x = 100;

// // // // // We can not re-assign a const variable
// // // // // x = 200 // Will result in an error

// // // // // We can still manipulate arrays and objects using const
// // // // const arr = [1, 2, 3, 4];
// // // // arr.push(5);
// // // // console.log(arr);

// // // // const person = {
// // // //   name: 'Brad',
// // // // };
// // // // person.name = 'John';
// // // // person.email = 'brad@gmail.com';
// // // // console.log(person);

// // // // // Declare multiple values at once
// // // // let a, b, c;

// // // // const d = 10,
// // // //   e = 20,
// // // //   f = 30;

// // // // console.log(d);
// // // // console.log(a);

// // // // //Bai 1.4

// // // // // String
// // // // const firstName = 'Sara';

// // // // // Number
// // // // const age = 30;
// // // // const temp = 98.9;

// // // // // Boolean
// // // // const hasKids = true;

// // // // // Null
// // // // const aptNumber = null;

// // // // // Undefined
// // // // // let score;
// // // // const score = undefined;

// // // // // Symbol
// // // // const id = Symbol('id');

// // // // // BigInt
// // // // const n = 9007199254740991n;

// // // // // Reference Types

// // // // const numbers = [1, 2, 3, 4];

// // // // const person = {
// // // //   name: 'Brad',
// // // // };

// // // // function sayHello() {
// // // //   console.log('Hello');
// // // // }

// // // // const output = sayHello;

// // // // console.log(output, typeof output);

// // // // // More info on why typeof null == object
// // // // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// // // // //  More info on the "function object" type
// // // // // https://262.ecma-international.org/5.1/#sec-11.4.3

// // // //Bai 1.5

// // // // Value is stored in the stack
// // // const name = 'John';
// // // const age = 30;

// // // // Reference is stored in the heap
// // // const person = {
// // //   name: 'Brad',
// // //   age: 40,
// // // };

// // // let newName = name;
// // // newName = 'Jonathan';

// // // let newPerson = person;
// // // newPerson.name = 'Bradley';

// // // console.log(name, newName); // John, Jonathan
// // // console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }

// // //Bai 1.6

// // let amount = 'hello';

// // // Convert string to number
// // amount = parseInt(amount);
// // amount = +amount;
// // amount = Number(amount);

// // // Convert number to string
// // amount = amount.toString();
// // amount = String(amount);

// // // Convert string to decimal
// // amount = parseFloat(amount);

// // // Convert number to boolean
// // amount = Boolean(amount);

// // // Ways to get NaN
// // console.log(Math.sqrt(-1));
// // console.log(1 + NaN);
// // console.log(undefined + undefined);
// // console.log('foo' / 3);

// // console.log(amount, typeof amount);

// //Bai 1.7

// // 1. Arithmetic Operators

// let x;

// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5;
// x = 5 / 5;
// x = 7 % 5;

// // Concatenation
// x = 'Hello' + ' ' + 'World';

// // Exponent
// x = 2 ** 3;

// // Increment
// x = 1;
// // x = x + 1;
// x++;

// // Decrement
// // x = x - 1;
// x--;

// // 2. Assignment Operators

// x = 10;

// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x %= 5;
// x **= 5;

// // 3. Comparison Operators

// // Equal to (Just the value, not the type)
// x = 2 == '2';

// // Equal to (Type and value)
// x = 2 === '2';

// // Not equal to (Just the value, not the type)
// x = 2 != '2';

// // Not equal to (Type and value)
// x = 2 !== 2;

// // Greater than and less than
// x = 10 > 5;
// x = 10 < 5;
// x = 10 <= 5;
// x = 10 >= 5;

// console.log(x);

// //Bai 1.8

// let x;

// // Coerced to a string
// x = 5 + '5';

// x = 5 + Number('5');

// // Coerced to a number
// x = 5 * '5';

// // null is coerced to 0 as it is a `falsy` value
// x = 5 + null;

// x = Number(null);

// x = Number(true);
// x = Number(false);

// // true is coerced to a 1
// x = 5 + true;

// // false is coerced to 0 (falsy)
// x = 5 + false;

// // Undefined is coerced to 0 (falsy)
// x = 5 + undefined;

// console.log(x, typeof x);

// //Bai 1.9

// let x;

// const name = 'John';
// const age = 31;

// // Concatenation
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// // Template Literals
// x = `Hello, my name is ${name} and I am ${age} years old`;

// // String Properties and Methods

// // Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
// const s = new String('Hello World');

// x = typeof s;

// x = s.length;

// // Access value by key
// x = s[0];

// // Shows the prototype of the string object. Shows the properties and methods
// x = s.__proto__;

// // Change case
// x = s.toUpperCase();
// x = s.toLowerCase();

// // charAt() - returns the character at the specified index
// x = s.charAt(0);

// // indexOf - returns the index of the first occurrence of a specified value in a string
// x = s.indexOf('d');

// // substring() - search a string for a specified value
// x = s.substring(2, 5);
// x = s.substring(7);

// // slice() - extracts a part of a string and returns a new string
// x = s.slice(-11, -6);

// // trim() - remove whitespace from beginning and end of string
// x = '         Hello World';
// x = x.trim();

// // replace() - replace all instances of a string
// x = s.replace('World', 'John');

// // includes() - returns true if the string is found
// x = s.includes('Hell');

// // valueOf() - returns the primitive value of a variable
// x = s.valueOf();

// // split() - returns an array of strings
// x = s.split('');

// console.log(x);


// //Bai 1.10

// // Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
// const myString = 'developer';

// let myNewString;

// // Solution 1:
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solution 2:
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// // Solution 3:
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// console.log(myNewString);

// //Bai 1.11

// let x;

// const num = new Number(5);

// // toString() - returns a string representation of the number
// x = num.toString();
// // To get the length
// x = num.toString().length;

// // toFixed() - returns a string representation of the number with a specified number of decimals
// x = num.toFixed(2);

// // toPrecision() - returns a number with the specified length
// x = num.toPrecision(3);

// // toExponential() -  convert a number to exponential notation and return its value as a string
// x = num.toExponential(2);

// // toLocaleString() - returns a string representation of the number, using the current locale
// x = num.toLocaleString('en-US');

// // valueOf - Get value
// x = num.valueOf();

// // The Number object itself has some properties and methods

// // Largest and smallest possible number
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;

// console.log(x);

// //bai 1.12

// let x;

// // Square root
// x = Math.sqrt(9);

// // Absolute value
// x = Math.abs(-5);

// // Round
// x = Math.round(4.2);

// // Round up
// x = Math.ceil(4.2);

// // Round down
// x = Math.floor(4.9);

// // Exponent
// x = Math.pow(2, 3);

// // Minimum number
// x = Math.min(4, 5, 3);

// // Maximum number
// x = Math.max(4, 5, 3);

// // Get a random number/decimal between 0 and 1
// x = Math.random();

// // Get a random number between 1 and 100
// x = Math.floor(Math.random() * 100 + 1);

// console.log(x);


// //Bai 1.13

// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// // Get the sum
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// // Get the difference
// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// // Get the product
// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);

// // Get the quotient
// const quot = x / y;
// const quotOutput = `${x} / ${y} = ${quot}`;
// console.log(quotOutput);

// // Get the remainder
// const rm = x % y;
// const rmOutput = `${x} % ${y} = ${rm}`;
// console.log(rmOutput);

// //Bai 1.14

// let d;

// // Get today's date and time
// d = new Date();

// // Set to a string
// d = d.toString();

// // Get a specific date
// // Important: the month is 0-based, so 0 is January and 11 is December
// d = new Date(2021, 0, 10, 12, 30, 0);

// // Pass in a string
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');

// // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// // Get current timestamp
// d = Date.now();

// // Get the timestamp of a specific date
// d = new Date();
// d = d.getTime();
// d = d.valueOf();

// // Create a date from a timestamp
// d = new Date(1666962049745);

// // Convert from milliseconds to seconds
// d = Math.floor(Date.now() / 1000);

// console.log(d);

// //Bai 1.15

let x;
let d = new Date();

// Date methods

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);
