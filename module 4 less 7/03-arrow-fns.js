// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const addArrow = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const addArrow1 = (a, b, c) => a + b + c;

// console.log(addArrow(1, 2, 3));

const fnA = function () {
  return {
    a: 5,
  };
};

console.log(fnA());
const fnB = () => ({ a: 5 });

console.log(fnB());
