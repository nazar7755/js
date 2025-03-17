const fnA = function (parameter) {
  const innerVariable = 'fnA';

  const innerFunction = function () {
    // console.log('innerFun');
  };

  //   return innerFunction;
};

const fnB = fnA();

// fnB();

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheff} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кофе');

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
  };

  return makeDish;
};

// const mango = makeSheff('Mango');

// mango('пирожок');
// mango('котлеты');

// const poly = makeSheff('Poly');

// poly('кофе');

// const floatingPoint = 3.145386;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

const rounder = function (places) {
  return function (numbers) {
    return Number(numbers.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.345));
console.log(rounder3(3.12345678));
