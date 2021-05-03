/* eslint-disable prefer-arrow-callback */
// const arr = [1, 2, 3];

// const newArr = [];
// for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(arr[i] + 1);
// }

// console.log(newArr);

const arr = [1, 2, 3];
// const newArr = [];

// function addition(value) {
//     console.log(value + 1);
// }

// arr.forEach(addition);
// console.log(somVar);

const someVar = arr.map(function (value, index) {
    value + 1;
});
console.log(someVar);
