// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log('This is a callback function', number);
// };

// fnA('This is a message', fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(10, 8, function (x, y) {
//   return x - y;
// });

const onGetPositionSeccess = function (position) {
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(onGetPositionSeccess, onGetPositionError);

// const callback = function () {
//   console.log('3 sec');
// };

// console.log('before');

// setTimeout(callback, 3000);

// console.log('after');

const filter = function (array, test) {
  const filtredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filtredArray.push(el);
    }
  }

  return filtredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, , 8], function (value) {
  return value <= 4;
});
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 50, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};
const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);
