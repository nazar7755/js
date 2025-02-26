// Задание 1: Приветствие
// Напиши функцию sayHello, которая принимает имя (строку) и возвращает строку вида "Привет, [имя]!".

// const sayHello = function (str) {
//   return `Hello, ${str}`;
// };

// console.log(sayHello('Anna'));
// console.log(sayHello('John'));
// console.log(sayHello('Bob'));

// Задание 2: Сумма двух чисел
// Создай функцию add, которая принимает два числа и возвращает их сумму.

// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(2, 3));
// console.log(add(1, 4));

// const getBigger = function (arg) {
//   let bigger = arg[0];

// };

// console.log(getBigger([1, 2, 3, 4, 5]));
// console.log(getBigger([5, 4, 3, 2, 1]));

// const isEven = function (num) {
//   return num % 2 === 0;
// };

// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(0));
// console.log(isEven(-5));

// const doubleArray = function (arr) {
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i] * 2);
//   }

//   return newArray;
// };

// console.log(doubleArray([1, 2, 3, 4, 5]));
// console.log(doubleArray([5, 4, 3, 2, 1]));

// const checkLength = function (str, len) {
//   if (str.length > len) {
//     return true;
//   }
//   return false;
// };

// checkLength('кот', 3);
// checkLength('кот', 4);
// checkLength('собака', 5);

// const repeat = function (str, n) {
//   return str.repeat(n);
// };

// console.log(repeat('ха', 3)); // "хахаха"
// console.log(repeat('ух', 3)); // "ухухух"
// console.log(repeat('а', 5)); // "ааааа"

// Задание 8: Максимум из трех чисел
// Напиши функцию maxOfThree, которая принимает три числа и возвращает наибольшее из них.

// const maxOfThree = function (a, b, c, d) {
//   return Math.max(a, b, c, d);
// };

// console.log(maxOfThree(1, 2, 4, 7));
// console.log(maxOfThree(4, 12, 14, 79));
// console.log(maxOfThree(16, 23, 41, 17));

// Задание 9: Проверка на "пустоту"
// Создай функцию isEmpty, которая принимает строку и возвращает true, если строка пустая (длина 0), и false, если в ней есть символы.

// const isEmpty = function (str) {
//   if (str.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isEmpty(''));
// console.log(isEmpty(' j'));

// const isEmpty = function (str) {
//   return str.length === 0;
// };

// console.log(isEmpty(''));
// console.log(isEmpty(' '));
// console.log(isEmpty('hello'));

// Задание 11: Первая буква заглавная
// Создай функцию capitalize, которая принимает строку и возвращает её с первой буквой в верхнем регистре, а остальные буквы оставляет как есть.

// const capitalize = function (str) {
//   return str[0].toUpperCase() + str.slice(1);
// };

// console.log(capitalize('hello'));
// console.log(capitalize('world'));
// console.log(capitalize('a'));

// Задание 12: Сумма элементов массива
// Напиши функцию sumArray, которая принимает массив чисел и возвращает их сумму.

// const sumArray = function (items) {
//   console.log('items: ', items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log(sumArray([12, 85, 37, 4]));
// console.log(sumArray([164, 48, 291]));
// console.log(sumArray([412, 371, 94, 63, 176]));

// Задание 13: Подсчет гласных
// Напиши функцию countVowels, которая принимает строку и возвращает количество гласных букв в ней (считаем только "а", "е", "и", "о", "у", "ы", "э", "ю", "я" — в нижнем регистре).

// const countVowels = function (a, b, c, d) {
//     for (const element of object) {

//     }
// };

// console.log(countVowels('a', 'b', 'c', 'd'));

// Задание 14: Фильтр четных чисел
// Создай функцию filterEven, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

const filterEven = function (a, b, c) {
  return filterEven;
};

console.log(filterEven([2, 4, 6]));
