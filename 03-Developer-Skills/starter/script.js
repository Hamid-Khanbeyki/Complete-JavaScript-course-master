// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// console.log(x);

// Day 1 17c... Day 2 21c... Day 3 23c...
const arr = [17, 21, 23];

const printForecast = function (temp) {
  for (let i = 0; i < arr.length; i++) {
    `temp is ${i}`;
  }
};

console.log(printForecast(arr));
