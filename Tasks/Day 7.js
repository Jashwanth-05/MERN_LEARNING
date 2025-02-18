
//task 7- difference between spread and rest operators

// The spread operator is used to expand elements of an array or object. It is commonly used for:

// Copying arrays or objects
// Merging arrays or objects
// Passing elements of an array as function arguments

//Examples of Spread Operator

// Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];  // [1, 2, 3]

// Merging arrays
const arr3 = [4, 5, 6];
const mergedArray = [...arr1, ...arr3];  // [1, 2, 3, 4, 5, 6]

// Expanding elements in function calls
const numbers = [10, 20, 30];
console.log(Math.max(...numbers));  // 30

// Copying and modifying an object
const obj1 = { name: "John", age: 25 };
const obj2 = { ...obj1, city: "New York" };  // { name: "John", age: 25, city: "New York" }


// 2. Rest Operator (...)
// The rest operator is used to collect multiple elements into an array. It is commonly used for:

// Collecting function arguments
// Destructuring arrays and objects
// Examples of Rest Operator

// Collecting function arguments
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));  // 10

// Destructuring an array
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Destructuring an object
const person = { name: "Alice", age: 30, city: "Paris" };
const { name, ...otherDetails } = person;
console.log(name);          // "Alice"
console.log(otherDetails);  // { age: 30, city: "Paris" }