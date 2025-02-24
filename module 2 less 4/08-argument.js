// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

// const add = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const unique = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       unique.push(element);

//       console.log(`${element} есть везде`);
//     }
//   }

//   console.log(unique);
// };

// console.log(filterNumbers([1, 2], 2, 4, 5));
// console.log(filterNumbers([6, 7, 8], 9, 8));
// console.log(filterNumbers([11, 12, 13, 14], 14));
