const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let total = 0;
// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   total += feedback[key];
// }

// console.log('totalFeedback:', total);

const values = Object.values(feedback);

console.log(values);

for (const value of values) {
  console.log(value);

  total += value;
}

console.log('totalFeedback:', total);
