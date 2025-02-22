// const shoulRenew = confirm("Do you want to renew your subscription?");

// console.log(shoulRenew);

// let quantity = prompt("How many do you want to buy?");
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = "50px";
// const result = Number.parseInt(elementWidth);
// console.log(typeof result);

// let elementHeight = "200.74px";
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);

// const salary = 1300.451345;
// salary = Number(salary.toFixed(2));
// salary = Number(salary);

// console.log(salary);

// let quantity = '30';
// let value = 'text';

// console.log(Number(quantity));
// console.log(Number(value));

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);

// console.log(2 ** 5);

// let base = prompt("число ?")
// base = Number(base);
// let power = prompt("степень ?");
// power = Number(power);
// const result = base ** power;

// console.log(result);

// const max = 50;
// const min = 30;

// const result = Math.random() * (max - min) + min;
// console.log(Math.round(result));

// const message = 'Welcome to Ukraine!';

// console.log(message.length);

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName)

// const room = 716;
// const type = 'VIP';

// const welcomeMsg = `Гость ${fullName} заселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);

// const quantity = 5;
// const orderMsg = `Вы заказываете ${quantity} холодильников`;
// console.log(orderMsg);

// let brand = prompt("Введите бренд");
// brand = brand.toLowerCase();

// console.log(brand);

// let brand = prompt("Введите бренд");
// cocncole.log(brand.slice(1).toLowerCase());

// const backlistWord1 = "спам";
// const backlistWord2 = "распродажа";

// const string1 = "Привет, я принц Абдул, это не спам, предлагаю тебе миллион!";
// const string2 = "Распродажа у нас каждую пятницу!";
// const string3 = "Что то пошло не так";

// console.log(string1.includes(backlistWord1));
// console.log(string1.includes(backlistWord2));

// console.log(string2.includes(backlistWord1));
// console.log(string2.includes(backlistWord1));

// console.log(string3.includes(backlistWord1));
// console.log(string3.includes(backlistWord2));

// console.log('10' > 5);

// const isEqual = 1 === true;
// console.log(isEqual);

// console.log(Boolean(null)); // false

// console.log(5 && 6 && 7 && 8); // 8

// console.log(5 || 6 || 7 || 8); // 5

// console.log(!false); // true

// const x1 = 30;
// const x2 = 50;

// const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x2}`, number > x2);

// let balance = prompt("Введите баланс");

// if (balance <= 500) {
//   console.log("Level 1")
// } else if (balance > 500 && balance < 1000) {
//   console.log("Level 2")
// } else if (balance > 1000 && balance < 5000) {
//     console.log("Level 3")
// } else {
//     console.log("Level 4")
// }

// console.log(message);

// const balance = 100;
// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);

// const stars = 4;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет');
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log("Такого количества звезд нет");
// }
// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("Такого количества звезд нет");
// }
// console.log(price);

// const option = 1;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Самовивоз';
//     break;

//   case 2:
//     message = 'Курьер';
//     break;

//   case 3:
//     message = 'Почта';
//     break;

//   default:
//     message = 'Варианта нет';
// }

// console.log(message);

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }

// const min = 500;
// const max = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * (max - min) + min);
//   console.log(`Salary  number ${i} - ${salary}`);

//   totalSalary += salary;
// }

// console.log('Total:', totalSalary);

// const min = 2;
// const max = 21;
// let total = 0;

// for (let i = min; i <= max; i += 1) {

//   if (i % 2 !== 0) {
//     console.log('Нечетное:', i);
//     continue;
//   }

//   console.log('Четное:', i);
//   total += i;
// }

// console.log('Total:', total);

// let balance = 10000;
// let payment = prompt("Введите сумму заказа");

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// );

// if (balance >= payment) {
//   console.log("Операция успешна");
//   balance -= payment;
//   console.log(`Баланс: ${balance}`);
// } else {
//   console.log("На счету недостаточно средств");
// }

// const totalSpent = 10000;
// const payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовый партнер, скидка 2%');
//   discount = 0.02;

// } else if (totalSpent >= 5000 && totalSpent < 20000) {
//   console.log('Серебряный партнер, скидка 5%');
//   discount = 0.05;

// } else if (totalSpent > 20000) {
//   console.log('Золотой партнер, скидка 10%');
//   discount = 0.1;

// } else {
//   console.log("Не партнер, скидка 0%");
// }

// payment -= payment * discount;

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
// );

// totalSpent += payment;

// console.log(`Общая сумма потраченного: ${totalSpent}`);

// const btnAdd = document.querySelector("button[data-add]");
// const valueInput = document.querySelector("input[data-value]");
// const resetBtn = document.querySelector("button[data-reset]");
// const outputEl = document.querySelector(".js-output span");

// let total = 0;

// btnAdd.addEventListener("click", function () {
//   console.log("Клик по кнопке");
//   const value = Number(valueInput.value);

//   console.log(value);
//   total += value;
//   outputEl.textContent = total;

//   valueInput.value = "";
// });

// resetBtn.addEventListener("click", function () {
//   total = 0;
//   outputEl.textContent = 0;
// });

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// friends[0] = 'Chelsy';

// console.table(friends);

// let a = [1,2,3];
// let b = a;

// console.log(a);
// console.log(b);

// a[0] = 500;

// console.log(a === b); // true

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i <= friends.length - 1 ; i +=1) {
//   console.log(friends[i]);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

// console.table(friends);

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);

//   total += cart[i];
// }

// for (const value of cart) {
//   total += value;
// }

// for (let i = 0; i < cart.length; i =+ 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log('Total:', total);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i]
//   console.log(number);

// if (number %2 === 0) {
//   console.log('numbers');

//   total += number;
// }
// }

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log("Цю ітерацію пропускаємо", number);
//     continue;
//   }
//   console.log(`${number} - парне число!`);
//   total += number;
// }

// console.log("Total:", total);

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x', 'qwerty123'];
// const logintoFind = 'Poly';
// let message = '';

// for (const login of logins) {
//   if (login === logintoFind) {
//     message = `Пользователь ${logintoFind} найден`;
//     break;
//   }
//   message = `Пользователь ${logintoFind} не найден`;
// }

// console.log(message);

// const message = logins.includes(logintoFind)
//   ? `Пользователь ${logintoFind} найден`
//   : `Пользователь ${logintoFind} не найден`;

// console.log(message);

// const numbers = [72, 9, 5, 6, 7, 12, 11, 13, 15, 17, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber:', smallestNumber);

// const numbers = [72, 9, 5, 6, 7, 12, 11, 13, 15, 17, 19];
// let biggestNimber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNimber) {
//     biggestNimber = number;
//   }
// }

// console.log('biggestNimber:', biggestNimber);

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1);

// const string = friends.join(',');
// console.log(string);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
// console.log(letter);

//   if (letter === letter.toLowerCase()) {
//     console.log('Эта буква в нижнем регистре');

//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//   }

//   invertedString +=
//   letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString:', invertedString);

// const title = 'Top 10 benefits of React framework';
// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// const numbers1 = [1, 2, 3, 4, 5, 9];
// const numbers2 = [4, 5, 6, 7, 8];
// let result = 0;

// const numbers = numbers1.concat(numbers2);

// for (const number of numbers) {
//   result += number;
// }

// console.log(result);

// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
// const cardToRemove = 'card-3';

// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);

// console.table(cards);

// const cardToInsert = 'card-6';
// const index = 5;

// cards.splice(index, 0, cardToInsert);
// console.log(cards);

// const cardToUpdete = 'карточка-4';
// const index = 3;

// cards.splice(index, 1, cardToUpdete);

// console.table(cards);
