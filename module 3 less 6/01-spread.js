// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [...[1, 2, 3], 0, 5, 10, ...[1, 2, 3], 4, 5];

// console.log(numbers);

const temps = [18, 14, 21, 17, 29, 24];

// console.log(Math.max(...temps));

const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

const lastWeekTemps = [1, 2, 3];
const currrentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currrentTemps, ...nextWeekTemps];
// console.log(allTemps);

const x = { x: 1, y: 2 };
const y = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);

const c = { ...a, ...b };

// console.log(c);

const deaufultSetting = {
  theme: 'light',
  showMessage: false,
  hideSidebar: true,
};

const userSettings = {
  showMessage: true,
  hideSidebar: false,
};

const finallSettings = { ...deaufultSetting, ...userSettings };

// console.log(finallSettings);
